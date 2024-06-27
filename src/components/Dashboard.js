// src/components/Dashboard.js
import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TableChartIcon from "@mui/icons-material/TableChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import EventIcon from "@mui/icons-material/Event";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CustomTable from "./CustomTable";
import CustomChart from "./CustomChart";
import CustomCalendar from "./CustomCalendar";
import KanbanBoard from "./KanbanBoard";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../App.css";

const drawerWidth = 240;

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("Table");

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Table":
        return <CustomTable />;
      case "Chart":
        return <CustomChart />;
      case "Calendar":
        return <CustomCalendar />;
      case "Kanban":
        return <KanbanBoard />;
      default:
        return <CustomTable />;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <div>
          <List>
            <ListItem button onClick={() => setSelectedComponent("Table")}>
              <ListItemIcon>
                <TableChartIcon />
              </ListItemIcon>
              <ListItemText primary="Table" />
            </ListItem>
            <ListItem button onClick={() => setSelectedComponent("Chart")}>
              <ListItemIcon>
                <ShowChartIcon />
              </ListItemIcon>
              <ListItemText primary="Chart" />
            </ListItem>
            <ListItem button onClick={() => setSelectedComponent("Calendar")}>
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItem>
            <ListItem button onClick={() => setSelectedComponent("Kanban")}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Kanban" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main style={{ flexGrow: 1, padding: "24px", marginTop: "64px" }}>
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <TransitionGroup>
                  <CSSTransition
                    key={selectedComponent}
                    timeout={300}
                    classNames="fade"
                  >
                    {renderComponent()}
                  </CSSTransition>
                </TransitionGroup>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Dashboard;
