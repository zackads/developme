# Photographer site

## Reusable components
The reusable components in `/assets/components/` are sorted into `atoms.html`, `molecules.html` and `organisms.html` and are reused in the site files `index.html`, `blog.html` ... etc. 

The components are styled in the respective `.scss` partial files in `/styles/scss`:

`/assets/components/atoms.html` -> `/styles/scss/_atoms.scss`
`/assets/components/molecules.html` -> `/styles/scss/_molecules.scss`
`/assets/components/organisms.html` -> `/styles/scss/_organisms.scss`

## Other styling

* `main.scss` imports partials
* `_settings.scss` sets global colour variables, defines mixins for media breakpoints, makes all `img` tags responsive by default and styles the `body` tag.
* `_typography.scss` imports the font files in `/assets/fonts/`, sets global font variables and styles typographic classes (`heading--title`, `banner`, `bodytext`...)
* `_atoms.scss`, `_molecules.scss`, and `_organisms.scss` style the reusable components defined in `/assets/components/`. 
