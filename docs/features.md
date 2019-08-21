# Features

Buoy is designed for the [Lighthouse GraphQL server](https://lighthouse-php.com/). This means that most features works out of the box.

### Pagination

Buoy handles pagination out-of-the-box.
With full [Lighthouse](https://lighthouse-php.com/)-pagination support, simply add
[`pagination`](master/api-reference/query.md#pagination) to your Query options. 

### Router R/W

When working with paginators, it easily gets tedious to handle URL-changes /
subscriptions to reflect the current page and limit. 
[Router R/W](master/features/router-rw.md) automates everything.

### File uploads

[Uploading files](master/features/file-uploads.md) with GraphQL has never been easier. 
Simply add the files as variables to your mutations, and let Buoy take care of the rest!

### Middleware

With [Middleware](master/features/middleware.md), you can change queries, variables, headers and responses.

### Caching

Buoy utilizes InMemoryCache which is automatically used unless you instruct Buoy otherwise. 


## Roadmap

Following features are planned or in the works. Click the links to follow their progress.

* [Optimistic UI](https://github.com/haffdata/buoy/issues/16) - Use a predicted response in templates until the actual response is received. 
* [Connection support](https://github.com/haffdata/buoy/issues/16) - Support paginators of type "connection". 
* [Lighthouse subscriptions](https://github.com/haffdata/buoy/issues/3) - Subscribe to changes in the backend.
* [Deferred fields](https://github.com/haffdata/buoy/issues/35) - Gradually load data based on priority
