import { styled } from "@tres-ui/react";

export const Badge = styled("span", {
  // Reset
  alignItems: "center",
  appearance: "none",
  borderWidth: "0",
  boxSizing: "border-box",
  display: "inline-flex",
  flexShrink: 0,
  fontFamily: "inherit",
  justifyContent: "center",
  lineHeight: "1",
  verticalAlign: "middle",
  outline: "none",
  padding: "0",
  textDecoration: "none",
  userSelect: "none",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  "&:disabled": {
    backgroundColor: "$slate3",
    pointerEvents: "none",
    color: "$slate8",
  },
  "&::before": {
    boxSizing: "border-box",
    content: '""',
  },
  "&::after": {
    boxSizing: "border-box",
    content: '""',
  },

  // Custom
  backgroundColor: "$slate3",
  borderRadius: "$pill",
  color: "$slate11",
  whiteSpace: "nowrap",
  fontVariantNumeric: "tabular-nums",

  variants: {
    size: {
      "1": {
        height: "$4",
        px: "$1",
        fontSize: "$1",
      },
      "2": {
        height: "$5",
        px: "$2",
        fontSize: "$2",
      },
    },
    variant: {
      gray: {
        backgroundColor: "$slate3",
        color: "$slate11",
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8",
        },
      },

      blue: {
        backgroundColor: "$blue3",
        color: "$blue11",
        "&:focus": {
          boxShadow: "inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8",
        },
      },
    },
    interactive: {
      true: {},
    },
  },

  compoundVariants: [
    {
      interactive: true,
      variant: "blue",
      css: {
        "@hover": {
          "&:hover": {
            backgroundColor: "$blue4",
          },
        },
        "&:active": {
          backgroundColor: "$blue5",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$blue5",
          },
      },
    },
  ],
  defaultVariants: {
    size: "1",
    variant: "gray",
  },
});
