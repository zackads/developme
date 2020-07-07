# CSS structure

## Typography

- Fonts are held in `/fonts/` and imported in `/styles/_fonts.css`.
- All text styling (_size_, _weight_, _font-family_, _color_ etc.) takes place in `_typography.css`.
- Where an element contains text (e.g. a `<button>`), the text itself is styled in `_typography.css`. The rest of that element's properties (e.g. `background-color`) are set in the corresponding CSS file (e.g. `_navigation.css`).
