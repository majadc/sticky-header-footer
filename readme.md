# Sticky header and Sticky footer

## Why sticking

(The Sticky Header & The Sticky Footer)[https://majadc.github.io/sticky-header-footer/]
The layout site has the header and the footer that don't scroll together with page.
The header and the footer have css property `position: sticky`.
The given values `top: 0` for the header and `bottom: 0` for the footer determines the sticky position this elements on the top and bottom page.

## Why the footer's laying on the bottom

The footer is placed on the bottom page thanks to use flex layout.
The style of the footer's parent - container.

```
  display: flex;
  flex-direction: column;
  min-height: 100vh;
```

The main element (the container's child) is set to grow, not shrinking with size auto.
And the footer is set to not shrinking at all.
