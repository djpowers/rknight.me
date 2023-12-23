//@ts-nocheck
  // DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
  export function gql(strings: TemplateStringsArray, ...args: string[]): string {
    let str = ''
    strings.forEach((string, i) => {
      str += string + (args[i] || '')
    })
    return str
  }
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** References another document, used as a foreign key */
  Reference: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  breadcrumbs: Array<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  extension: Scalars['String']['output'];
  template: Scalars['String']['output'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Folder = {
  __typename?: 'Folder';
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
  endCursor: Scalars['String']['output'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type Document = {
  id: Scalars['ID']['output'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON']['output'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float']['output'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']['output']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  link: Link;
  linkConnection: LinkConnection;
  post: Post;
  postConnection: PostConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String']['input'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLinkArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLinkConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LinkFilter>;
};


export type QueryPostArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostFilter>;
};

export type DocumentFilter = {
  link?: InputMaybe<LinkFilter>;
  post?: InputMaybe<PostFilter>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  format?: Maybe<Scalars['String']['output']>;
  matches?: Maybe<Scalars['String']['output']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  folder?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentNode = Link | Post | Folder;

export type Link = Node & Document & {
  __typename?: 'Link';
  title: Scalars['String']['output'];
  link: Scalars['String']['output'];
  date: Scalars['String']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type StringFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DatetimeFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LinkFilter = {
  title?: InputMaybe<StringFilter>;
  link?: InputMaybe<StringFilter>;
  date?: InputMaybe<DatetimeFilter>;
  comment?: InputMaybe<StringFilter>;
};

export type LinkConnectionEdges = {
  __typename?: 'LinkConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Link>;
};

export type LinkConnection = Connection & {
  __typename?: 'LinkConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<LinkConnectionEdges>>>;
};

export type Post = Node & Document & {
  __typename?: 'Post';
  title: Scalars['String']['output'];
  permalink: Scalars['String']['output'];
  excerpt: Scalars['String']['output'];
  layout: Scalars['String']['output'];
  date: Scalars['String']['output'];
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  body?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type RichTextFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostFilter = {
  title?: InputMaybe<StringFilter>;
  permalink?: InputMaybe<StringFilter>;
  excerpt?: InputMaybe<StringFilter>;
  layout?: InputMaybe<StringFilter>;
  date?: InputMaybe<DatetimeFilter>;
  tags?: InputMaybe<StringFilter>;
  body?: InputMaybe<RichTextFilter>;
};

export type PostConnectionEdges = {
  __typename?: 'PostConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Post>;
};

export type PostConnection = Connection & {
  __typename?: 'PostConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<PostConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  updateLink: Link;
  createLink: Link;
  updatePost: Post;
  createPost: Post;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String']['input'];
  relativePath: Scalars['String']['input'];
  template?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentUpdateMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentMutation;
};


export type MutationUpdateLinkArgs = {
  relativePath: Scalars['String']['input'];
  params: LinkMutation;
};


export type MutationCreateLinkArgs = {
  relativePath: Scalars['String']['input'];
  params: LinkMutation;
};


export type MutationUpdatePostArgs = {
  relativePath: Scalars['String']['input'];
  params: PostMutation;
};


export type MutationCreatePostArgs = {
  relativePath: Scalars['String']['input'];
  params: PostMutation;
};

export type DocumentUpdateMutation = {
  link?: InputMaybe<LinkMutation>;
  post?: InputMaybe<PostMutation>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentMutation = {
  link?: InputMaybe<LinkMutation>;
  post?: InputMaybe<PostMutation>;
};

export type LinkMutation = {
  title?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
};

export type PostMutation = {
  title?: InputMaybe<Scalars['String']['input']>;
  permalink?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  layout?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  body?: InputMaybe<Scalars['JSON']['input']>;
};

export type LinkPartsFragment = { __typename: 'Link', title: string, link: string, date: string, comment?: string | null };

export type PostPartsFragment = { __typename: 'Post', title: string, permalink: string, excerpt: string, layout: string, date: string, tags?: Array<string | null> | null, body?: any | null };

export type LinkQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type LinkQuery = { __typename?: 'Query', link: { __typename: 'Link', id: string, title: string, link: string, date: string, comment?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type LinkConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LinkFilter>;
}>;


export type LinkConnectionQuery = { __typename?: 'Query', linkConnection: { __typename?: 'LinkConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'LinkConnectionEdges', cursor: string, node?: { __typename: 'Link', id: string, title: string, link: string, date: string, comment?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type PostQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename: 'Post', id: string, title: string, permalink: string, excerpt: string, layout: string, date: string, tags?: Array<string | null> | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type PostConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostFilter>;
}>;


export type PostConnectionQuery = { __typename?: 'Query', postConnection: { __typename?: 'PostConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'PostConnectionEdges', cursor: string, node?: { __typename: 'Post', id: string, title: string, permalink: string, excerpt: string, layout: string, date: string, tags?: Array<string | null> | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export const LinkPartsFragmentDoc = gql`
    fragment LinkParts on Link {
  __typename
  title
  link
  date
  comment
}
    `;
export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  title
  permalink
  excerpt
  layout
  date
  tags
  body
}
    `;
export const LinkDocument = gql`
    query link($relativePath: String!) {
  link(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...LinkParts
  }
}
    ${LinkPartsFragmentDoc}`;
export const LinkConnectionDocument = gql`
    query linkConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: LinkFilter) {
  linkConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...LinkParts
      }
    }
  }
}
    ${LinkPartsFragmentDoc}`;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      link(variables: LinkQueryVariables, options?: C): Promise<{data: LinkQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: LinkQueryVariables, query: string}> {
        return requester<{data: LinkQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: LinkQueryVariables, query: string}, LinkQueryVariables>(LinkDocument, variables, options);
      },
    linkConnection(variables?: LinkConnectionQueryVariables, options?: C): Promise<{data: LinkConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: LinkConnectionQueryVariables, query: string}> {
        return requester<{data: LinkConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: LinkConnectionQueryVariables, query: string}, LinkConnectionQueryVariables>(LinkConnectionDocument, variables, options);
      },
    post(variables: PostQueryVariables, options?: C): Promise<{data: PostQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostQueryVariables, query: string}> {
        return requester<{data: PostQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostQueryVariables, query: string}, PostQueryVariables>(PostDocument, variables, options);
      },
    postConnection(variables?: PostConnectionQueryVariables, options?: C): Promise<{data: PostConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostConnectionQueryVariables, query: string}> {
        return requester<{data: PostConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostConnectionQueryVariables, query: string}, PostConnectionQueryVariables>(PostConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (
  client: TinaClient,
  options?: { branch?: string }
) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: { branch?: string },
    client
  ) => Promise<any> = async (doc, vars, options) => {
    let url = client.apiUrl
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf('/')
      url = client.apiUrl.substring(0, index + 1) + options.branch
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url,
    })

    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} }
  }

  return requester
}

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(
      createClient({
        url: "https://content.tinajs.io/1.4/content/c1ec0969-0bf5-4a80-8d35-b2f9fcd4c113/github/master",
        queries,
      })
    )
  )

export const queries = (
  client: TinaClient,
  options?: {
    branch?: string
  }
) => {
  const requester = generateRequester(client, options)
  return getSdk(requester)
}

  