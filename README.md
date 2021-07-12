# debug-onserverprefetch

Problem: after reaching the home page, click on the store link.

Store page is supposed to fetch data and AFTER computed property will fetch data from `pinia` store.

It seems like with router-link, `onServerPrefetch hook` is never executed unless you refresh the page with `ctrl+r`.