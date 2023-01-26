const lightThemeOption = {
  palette: {
    mode: "light",
    primary: {
      main: "#ffa700",
      dark: "#ffa700",
      light: "#f9cb28",
    },
    secondary: {
      main: "#ffa300",
      dark: "#ff0080",
    },
    info: {
      main: "#B8C7FF",
      dark: "#1E1938",
      light: "#7B78ED",
    },
    warning: {
      main: "#FEC201",
      dark: "#FF7A00",
    },
    success: {
      main: "#B3DCEA",
      dark: "#0FD960",
    },
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    text: {
      primary: "#000",
    },
    background: {
      default: "#f4f6f9",
      paper: "#ffffff",
    },
    custom: {
      navbar: "#f4f6f9",
      text: "#000",
      callaction: "#000",
      section1: "#ffea00",
      footer: "#292929",
    },
  },
  typography: {
    fontFamily: [
      "Alliance1",
      "Alliance1HeaderFallback",
      "-apple-system",
      "BlinkMacSystemFont",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Helvetica",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ].join(","),
    button: {
      textTransform: "capitalize",
    },
    fontSize: 16,
  },
  components: {
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: "12px",
          backgroundColor: "#fff",
          backgroundImage: "none",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: "12px",
          backgroundColor: "#fff",
          backgroundImage: "none",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        container: {
          backdropFilter: "blur(3px)",
        },
        paper: {
          backgroundColor: "#000",
          backgroundImage: "none",
        },
      },
    },
  },
};

export default lightThemeOption;
