# What is HashRouter?

### 6.25.2018

- had a problem with my portfolio site, explain what the problem was
- eventually fixed it by switching to HashRouter
- didn't actually know why it worked. why does it work?
- Any info after a hash symbol is interpreted by the web browser on the client side

A few days ago, someone pointed out to me that my portfolio website had a fatal flaw. Upon refreshing any section of the site, or attempting to go backwards in the hash history, the browser would return a 404. Even worse, attempting to manually input the URL of the site and go to any page would also result in a 404. This meant potential employers browsing my site could ONLY navigate the site by clicking the links on the navbar or opening up projects in a new tab; anything else would force them to close the window and restart from the homepage.

Not good.

Fortunately, the problem was fixed after about 5 hours of experimentation. The solution? A simple change of just a few lines of code; changing my Router component to HashRouter.

``` javascript

    import { Route, Link, Switch, Redirect, withRouter } from 'react-router-dom'
    import {HashRouter as Router} from 'react-router-dom'

    ReactDOM.render(
        <Router>
        <App />
        </Router>
    , document.getElementById('root'));
    registerServiceWorker();
    
```

Sweet! I had finally fixed that irritating, laborious problem. But I didn't really understand WHY the switch had solved my problem; the only visible difference was that my URL now had a /#/ between my root and endpoints. And since I have multiple apps being hosted on GitHub pages, I need to know the when and why of using this tool.

### Single-page React apps on GitHub Pages

My initial queries revealed a pattern of similar problems on GitHub Issues and Stack Overflow; people with single-page React apps have been falling victim to a similar problem. According to this repository (https://github.com/rafrex/spa-github-pages), GitHub pages has problems with 