import { program } from 'commander'
import select from '@inquirer/select'
import { input } from '@inquirer/prompts'
import checkbox from '@inquirer/checkbox'
import chalk from 'chalk'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import moment from 'moment'
import utils from './utils.js'
import https from 'https'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const __siteroot = __dirname.replace('/cli', '');

const slugify = (string) => {
    return string.toLowerCase().replace(/[^\w\s]/gi, '').split(' ').join('-')
}

const runWizard = async () => {
        console.log(chalk.hex('#e33d94')`............................................................
............................................................
..................@@@@@@@@@@@@@@,..&@@@@@,..................
..................@@@@@@@@@@@@@...@@@@@@....................
........................@@@@@@...@@@@@@.....................
.......................@@@@@@...@@@@@@......................
.....................%@@@@@*..%@@@@@*.......................
.......................@@@@@@...@@@@@@......................
........................@@@@@@...@@@@@@.....................
..................@@@@@..@@@@@@...@@@@@@....................
..................@@@@@...#@@@@@/..#@@@@@/..................
............................................................
.......................rknight.me...........................
............................................................
`)

    const type = await select({
        message: 'What do you want to do?',
        choices: [
            {
                name: 'Create a new post',
                value: 'post',
                description: 'Create a new post',
            },
            {
                name: 'Create a new link post',
                value: 'link',
                description: 'Create a new link post',
            },
            {
                name: 'Create a new changelog entry',
                value: 'changelog',
                description: 'Create a new changelog entry',
            },
            {
                name: 'Add a new project',
                value: 'project',
                description: 'Add a new project',
            },
        ],
    })

    switch (type) {
        case 'post':
            createPost()
            break
        case 'link':
            createLink()
            break
        case 'changelog':
            createChangelog()
            break
        case 'project':
            addProject()
            break
    }
}

/////////////////////////////////
//////// Create Post ////////////
/////////////////////////////////
const createPost = async () => {
    const title = await input({ message: 'Post title' })
    const slug = await input({ message: 'Post slug', default: slugify(title) })

    const slugDate = new Date().toISOString().split('T')[0]
    const year = new Date().getFullYear()
    const postDate = new Date().toISOString()

    const tags = await checkbox({
        message: 'Tags',
        choices: [
            { name: 'ActivityPub', value: 'ActivityPub' },
            { name: 'AdventOfCode', value: 'AdventOfCode' },
            { name: 'AI', value: 'AI' },
            { name: 'Alfred', value: 'Alfred' },
            { name: 'Apps', value: 'Apps' },
            { name: 'BabyKnight', value: 'BabyKnight' },
            { name: 'Development', value: 'Development' },
            { name: 'DIY', value: 'DIY' },
            { name: 'Eleventy', value: 'Eleventy' },
            { name: 'Food', value: 'Food' },
            { name: 'Games', value: 'Games' },
            { name: 'Hackathon', value: 'Hackathon' },
            { name: 'Homescreen', value: 'Homescreen' },
            { name: 'Lego', value: 'Lego' },
            { name: 'Letters', value: 'Letters' },
            { name: 'MacOS', value: 'MacOS' },
            { name: 'Mastodon', value: 'Mastodon' },
            { name: 'Movies', value: 'Movies' },
            { name: 'Music', value: 'Music' },
            { name: 'OpenWeb', value: 'OpenWeb' },
            { name: 'Personal', value: 'Personal' },
            { name: 'Podcasting', value: 'Podcasting' },
            { name: 'Recipes', value: 'Recipes' },
            { name: 'Shortcuts', value: 'Shortcuts' },
            { name: 'SocialMedia', value: 'SocialMedia' },
            { name: 'StJude', value: 'StJude' },
            { name: 'TV', value: 'TV' },
            { name: 'YearInReview', value: 'YearInReview' },
        ],
    })

    const project = await utils.selectProject(__siteroot, {
        title: 'none',
        value: 'none',
        description: 'none',
    })

    let meta = `---
title: "${title}"
permalink: /blog/${slug}/index.html
date: ${postDate}
excerpt: ""
layout: post`

    if (tags.length > 0)
    {
        meta = `${meta}\ntags:\n${tags.map(tag => `    - ${tag}`).join('\n')}`
    }

    if (project.value !== 'none') {
        meta = `${meta}\nproject: ${project.link}`
    }

    meta = `${meta}\n---`

    fs.writeFileSync(`${__siteroot}/src/posts/${year}/${slugDate}-${slug}.md`, meta, { flag: "wx" })
}

/////////////////////////////////
//////// Create Link ////////////
/////////////////////////////////
const createLink = async () => {
    const link = await input({ message: 'Link' })

    console.log('Fetching link data...')

    const domain = new URL(link).origin

    const {
        title: foundTitle, author, feed, mastodon
    } = await utils.fetchPageData(link, ['title', 'author', 'feed', 'mastodon'])

    const title = await input({ message: 'Link title', default: foundTitle })

    const slug = await input({ message: 'Post slug', default: slugify(title) })
    const slugDate = new Date().toISOString().split('T')[0]
    const year = new Date().getFullYear()
    const postDate = new Date().toISOString()

    const meta = `---
title: "${title}"
permalink: /links/${slug}/index.html
link: ${link}
date: ${postDate}
author: 
  name: ${author ? author : ''}
  web: ${domain}
  feed: ${feed}
  mastodon: ${mastodon.join(', ')}
---`

    fs.writeFileSync(`${__siteroot}/src/links/${year}/${slugDate}-${slug}.md`, meta, { flag: "wx" })
}

/////////////////////////////////
///// Create Changelog //////////
/////////////////////////////////
const createChangelog = async () => {
    const project = await utils.selectProject(__siteroot, {
        title: 'rknight.me',
        link: 'https://rknight.me',
    })

    const date = new Date().toISOString().split('T')[0]
    const type = await select({
        message: 'Select Type',
        choices: [
            {
                name: 'Feature',
                value: 'feature',
                description: 'A new feature',
            },
            {
                name: 'Fix',
                value: 'fix',
                description: 'A bug fix',
            },
            {
                name: 'Project',
                value: 'project',
                description: 'A new project',
            },
            {
                name: 'Retired',
                value: 'retired',
                description: 'Retire a project',
            },
        ],
    })
    const message = await input({ message: 'Changelog Message' })

    const { title, link } = project

    const output = `- [${title}](${link}) [${type}] ${message || ''}`
    const year = new Date().getFullYear()
    const clFile = `${__siteroot}/src/changelog/${year}/${date}.md`

    let content = null
    if (!fs.existsSync(clFile))
    {
        const title = `Changelog ${date}`
        const permalink = `/log/${date}/index.html`
        const entryDate = moment(date).toISOString()

        content = `---
title: ${title}
permalink: ${permalink}
date: ${entryDate}
---

${output}`
    } else {
        content = fs.readFileSync(clFile, 'utf8')
        content = `${content}\n${output}`
    }

    fs.writeFileSync(clFile, content, { flag: "w" })
}

/////////////////////////////////
////////// Add project //////////
/////////////////////////////////
const addProject = async () => {
    const projectUrl = await input({ message: 'Link' })
    const imageName = await input({ message: 'Image Name' })
    let projects = utils.getProjectsData(__siteroot)

    let newProject = await utils.fetchPageData(projectUrl, ['title', 'image', 'description'])
    const imageUrl = newProject.image
    
    newProject.link = projectUrl
    newProject.image = imageName

    https.get(imageUrl, (res) => {
        const path = `${__siteroot}/src/assets/projects/${imageName}.jpg`
        const tempPath = `${__siteroot}/src/assets/projects/${imageName}-tmp.jpg`
        const filePath = fs.createWriteStream(tempPath)
        res.pipe(filePath)
        filePath.on('finish',() => {
            filePath.close()
            sharp(tempPath)
                .rotate()
                .resize(600)
                .toFile(path)
                .then(() => {
                    fs.unlinkSync(tempPath)
                    projects.featured.unshift(newProject)
                    projects.featured.pop()
                    projects.current.splice(1, 0, newProject)

                    fs.writeFileSync(`${__siteroot}/src/_data/site/projects.json`, JSON.stringify(projects, null, 2), { flag: "w" })
                })
        })
    })
}

program
    .command('run')
    .description('🧙‍♂️ run the site wizard')
    .action(() => runWizard())

program
    .command('post')
    .description('📝 Create a new post')
    .action(() => createPost())

program
    .command('post')
    .description('🔗 Create a new link')
    .action(() => createLink())

program
    .command('changelog')
    .description('🛠️ Create a new changelog entry')
    .action(() => createChangelog())

program
    .command('project')
    .description('🛠️ Add a new project')
    .action(() => addProject())

program.parse()