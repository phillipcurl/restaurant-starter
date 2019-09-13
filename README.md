<div>
<br /><img src="./static/images/uploads/download.png" width="250"></div><br />

# nuxt-netlify-starter

> A starter template for building statically-generated Nuxt.js sites with a Netlify CMS backend.

[![Netlify Status](https://api.netlify.com/api/v1/badges/614f215c-bfbe-440c-94c2-2b2ecd837cd0/deploy-status)](https://app.netlify.com/sites/nuxt-netlify-starter/deploys)

This project is essentially a base Nuxt.js app, created using `create-nuxt-app`, with the addition of basic Netlify CMS configuration. It scores 100% in all Lighthouse categories and should be a good jumping off point for projects.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/netlify-statuskit)

## Getting Started

To use this template, you have a few options:

- The quickest and simplest option is to click the `Deploy to Netlify` button above. That will clone the repo for you and automatically begin a deploy to Netlify.
- You can also click the `Use this template` button provided by GitHub, as this repo has been setup as a template repository. That will walk you through the steps of cloning the repository. Then you can setup that repository as a new site in Netlify. For more details on that process, see this page from their docs: https://www.netlify.com/docs/continuous-deployment/
- The final option is to manually clone the repository yourself, add it to a new repository in GitHub, and follow the deploy process mentioned in the previous bullet.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For a detailed explanation of how things work, check out the [Nuxt.js docs](https://nuxtjs.org).

## Configuring Netlify

Once you have your project deployed to Netlify, you will have to enable Netlify Identity and Git Gateway in order to login to `https://{YOUR-SITE}.netlify.com/admin` and manage content in the CMS. Follow the steps below to do that.

- Enable Netlify Identity: https://www.netlify.com/docs/identity/
- Set registration preferences: https://app.netlify.com/sites/{YOUR-SITE-NAME}/settings/identity#registration
  - I end up setting this to invite-only in 99% of use-cases for this starter template.
- Enable Git Gateway: https://app.netlify.com/sites/{YOUR-SITE-NAME}/settings/identity#services
- You can now invite users, and they will be able to login to the CMS at `https://{YOUR-SITE}.netlify.com/admin`

## Differences from Standard Nuxt Template

- In the `static` directory, you will see an `admin` folder. This is where the configuration for Netlify CMS lives.
  - `static/admin/index.html` is the page served to users when they access `https://{YOUR-SITE}.netlify.com/admin`. This file includes references to the Netlify CMS CDN to render the login prompt and CMS admin section. Feel free to edit this as needed.
  - `static/admin/config.yml` contains the configuration for Netlify CMS. There are currently [Collections](https://www.netlifycms.org/docs/configuration-options/#collections) setup for a basic site setup and blog. Again, feel free to delete or alter these as needed. For more information on options available in `static/admin/config.yml`, see this page from their docs: https://www.netlifycms.org/docs/configuration-options/.
- In the base directory, you will see a file called `netlify.toml`. Right now, it's essentially just telling Netlify what build command to use and where to expect the compiled files. There are many more configuration options for this file, details of which can be found here: https://www.netlify.com/docs/continuous-deployment/#deploy-contexts.
- There is also a basic component to render Markdown. You can find it at `components/MdContent.vue`.
  - This component takes a `content` prop that is a string of Markdown and renders it as HTML. This is useful in places like blog posts, where you have a large block of MD content.
  - It also takes a `shouldStyle` boolean prop that defaults to true. When set to true, it adds some sane CSS defaults to Markdown content rendered as HTML. Those styles are ported from Bulma's 'Content' component. For more information see: https://bulma.io/documentation/elements/content/
