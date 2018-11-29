# Thanksgiving Dinner

## A React Suspense and lazy() demo

### Walkthrough

#### 1. initial commit

At this stage, we're loading images on the client-side without handling loading states. The only webpack chunks in the network tab of Chrome DevTools are the ones that come by default with create-react-app. The experience is jumpy and slow for the user.

![step 1 chunks](src/assets/chunks-steps1-3.png)

#### 2. add some loading spinners

We haven't done anything to lazyload yet...

#### 3. break this up into "courses" for the user

The user doesn't want to see everything all at once! In this step we implemented buttons that only show one course at a time.

Unfortunately, even though it appears that the components aren't loading until the user clicks the button to get their next course, the same bundles are still loading at the same time!

![step 3 chunks](src/assets/chunks-steps1-3.png)

### Thanks

- [Rhys Lloyd](https://codepen.io/justrhysism/pen/eDJrk) for the background plate
- photographers for the images (see alt text and source links for details)
