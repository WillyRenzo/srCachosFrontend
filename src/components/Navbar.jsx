import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  AutoStories,
  CalendarMonth,
  Inventory,
  Leaderboard,
  Paid,
  PointOfSale,
  Settings,

} from "@mui/icons-material";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import { Link } from "react-router-dom";
import { Collapse } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const navBarOptions = [
  {
    icon: "CalendarMonth",
    text: "Agenda",
    path: "agenda",
    parents: [],
  },
  {
    icon: "AutoStories",
    text: "Controle de Cadastros",
    path: "cadastros",
    parents: [
      {
        icon: "ArrowForward",
        text: "Clientes",
        path: "cadastros/clientes",
      },
      {
        icon: "ArrowForward",
        text: "Profissionais",
        path: "cadastros/profissionais",
      },
      {
        icon: "ArrowForward",
        text: "Produtos",
        path: "produtos",
      },
      {
        icon: "ArrowForward",
        text: "Fornecedores",
        path: "fornecedores",
      },
      {
        icon: "ArrowForward",
        text: "Cartões",
        path: "cartoes",
      },
    ],
  },
  {
    icon: "Inventory",
    text: "Estoque",
    path: "estoque",
    parents: [],
  },
  {
    icon: "PointOfSale",
    text: "Contas e Caixa",
    path: "contas",
    parents: [],
  },
  {
    icon: "Paid",
    text: "Financeiro",
    path: "financeiro",
    parents: [],
  },
  {
    icon: "Leaderboard",
    text: "Relatórios",
    path: "relatorio",
    parents: [],
  },
];

const lowerNavBarOptions = [
  {
    icon: "Settings",
    text: "Configurações",
    path: "config",
  },
  {
    icon: "Logout",
    text: "Sair",
    path: "logout",
  },
];

function renderListIcon(icon) {
  switch (icon) {
    case "CalendarMonth":
      return <CalendarMonth />;
    case "AutoStories":
      return <AutoStories />;
    case "Inventory":
      return <Inventory />;
    case "PointOfSale":
      return <PointOfSale />;
    case "Paid":
      return <Paid />;
    case "Leaderboard":
      return <Leaderboard />;
    case "Settings":
      return <Settings />;
    case "Logout":
      return <LogoutIcon />;
    case "ArrowForward":
      return <ArrowForwardIosIcon />;
    default:
      return <DoNotDisturbIcon />;
  }
}

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openParents, setOpenParents] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleParentClick = (index) => {
    let newOpenParents = [...openParents];
    newOpenParents[index] = !newOpenParents[index];
    setOpenParents(newOpenParents);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            ERP Sr.Cachos
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navBarOptions.map((option, index) => (
            <Link to={option.path}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                component="nav"
                onClick={() => {
                  handleParentClick(index);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {renderListIcon(option.icon)}
                </ListItemIcon>
                <ListItemText
                  primary={option.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
                {openParents[index] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openParents[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {option.parents.map((parent, index2) => (
                    <Link to={parent.path}>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          {renderListIcon(parent.icon)}
                        </ListItemIcon>
                        <ListItemText primary={parent.text} />
                      </ListItemButton>
                    </Link>
                  ))}
                </List>
              </Collapse>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {lowerNavBarOptions.map((option, index) => (
            <ListItemButton
              key={option.text}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => handleParentClick(option.path)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {renderListIcon(option.icon)}
              </ListItemIcon>
              <ListItemText
                primary={option.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
