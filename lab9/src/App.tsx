import { useState, type SyntheticEvent } from "react";
import {
  AppBar,
  Box,
  Collapse,
  Drawer,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Slider,
  Stack,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InsightsIcon from "@mui/icons-material/Insights";
import DevicesIcon from "@mui/icons-material/Devices";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CategoryIcon from "@mui/icons-material/Category";
import FlagIcon from "@mui/icons-material/Flag";

const drawerWidth = 280;

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

const MetricCard = ({ title, value, description, icon }: MetricCardProps) => {
  return (
    <Paper elevation={3} sx={{ p: 2.5, height: "100%" }}>
      <Stack spacing={1.5} sx={{ alignItems: "flex-start" }}>
        <Box
          sx={{
            width: 52,
            height: 52,
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "primary.light",
            color: "primary.contrastText",
          }}
        >
          {icon}
        </Box>

        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>

        <Typography variant="h5">{value}</Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Stack>
    </Paper>
  );
};

const priorityMarks = [
  { value: 1, label: "1" },
  { value: 5, label: "5" },
  { value: 10, label: "10" },
];

export default function App() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const [assetName, setAssetName] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [category, setCategory] = useState("ноутбук");
  const [price, setPrice] = useState("1500");
  const [priority, setPriority] = useState<number>(5);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleSettingsToggle = () => {
    setSettingsOpen((prev) => !prev);
  };

  const handlePriorityChange = (_event: Event, newValue: number | number[]) => {
    setPriority(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    alert(
      `Актив зареєстровано:\nНазва: ${assetName || "Не вказано"}\nСерійний номер: ${
        serialNumber || "Не вказано"
      }\nКатегорія: ${category}\nЦіна: $${price || "0"}\nПріоритет: ${priority}`,
    );
  };

  const drawerContent = (
    <Box sx={{ width: drawerWidth }} role="presentation">
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Панель навігації
        </Typography>
      </Toolbar>

      <List>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Огляд" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Inventory2Icon />
          </ListItemIcon>
          <ListItemText primary="Активи" />
        </ListItemButton>

        <ListItemButton onClick={handleSettingsToggle}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Налаштування" />
          {settingsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={settingsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Профіль" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ManageAccountsIcon />
              </ListItemIcon>
              <ListItemText primary="Обліковий запис" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f4f7fb" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (currentTheme) => currentTheme.zIndex.drawer + 1,
          boxShadow: 0,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Toolbar>
          {!isDesktop && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Lab 9 — UI Engineering with Material UI
          </Typography>

          <Typography variant="body2">Адаптивна інформаційна панель</Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawerContent}
        </Drawer>

        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Stack spacing={3}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Панель керування активами
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Цей приклад демонструє адаптивну сітку, бічну навігацію, App Bar
              та форму реєстрації активу на базі компонентів Material UI.
            </Typography>
          </Paper>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <MetricCard
                title="Загальна кількість користувачів"
                value="12 480"
                description="+8.2% за останній місяць"
                icon={<PeopleAltIcon />}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <MetricCard
                title="Активні сесії"
                value="1 245"
                description="Користувачі онлайн просто зараз"
                icon={<InsightsIcon />}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <MetricCard
                title="Підключені пристрої"
                value="536"
                description="Синхронізовані робочі станції"
                icon={<DevicesIcon />}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <MetricCard
                title="Виконані заявки"
                value="94%"
                description="Рівень виконання цього тижня"
                icon={<AssignmentTurnedInIcon />}
              />
            </Grid>
          </Grid>

          <Paper elevation={4} sx={{ p: 3 }}>
            <Stack spacing={3} component="form" onSubmit={handleSubmit}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Форма реєстрації активу
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Заповніть поля нижче, щоб додати новий актив до системи.
                </Typography>
              </Box>

              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Назва активу"
                    value={assetName}
                    onChange={(event) => setAssetName(event.target.value)}
                    variant="outlined"
                    placeholder="Наприклад, Dell Latitude 7440"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Серійний номер"
                    value={serialNumber}
                    onChange={(event) => setSerialNumber(event.target.value)}
                    variant="filled"
                    placeholder="SN-2026-001"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <FormControl fullWidth>
                    <InputLabel id="category-label">Категорія</InputLabel>
                    <Select
                      labelId="category-label"
                      label="Категорія"
                      value={category}
                      onChange={(event) => setCategory(event.target.value)}
                      startAdornment={
                        <InputAdornment position="start">
                          <CategoryIcon fontSize="small" />
                        </InputAdornment>
                      }
                    >
                      <MenuItem value="ноутбук">Ноутбук</MenuItem>
                      <MenuItem value="монітор">Монітор</MenuItem>
                      <MenuItem value="сервер">Сервер</MenuItem>
                      <MenuItem value="мережеве-обладнання">
                        Мережеве обладнання
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Ціна"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    variant="outlined"
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <AttachMoneyIcon fontSize="small" />
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Paper variant="outlined" sx={{ p: 2.5 }}>
                    <Stack spacing={2}>
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{ alignItems: "center" }}
                      >
                        <FlagIcon color="primary" />
                        <Typography variant="subtitle1">
                          Рівень пріоритету: {priority}
                        </Typography>
                      </Stack>

                      <Slider
                        value={priority}
                        onChange={handlePriorityChange}
                        step={1}
                        min={1}
                        max={10}
                        marks={priorityMarks}
                        valueLabelDisplay="auto"
                      />
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Box
                  component="button"
                  type="submit"
                  sx={{
                    border: "none",
                    borderRadius: 2,
                    px: 3,
                    py: 1.5,
                    bgcolor: "primary.main",
                    color: "primary.contrastText",
                    fontSize: "1rem",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Зареєструвати актив
                </Box>

                <Box
                  component="button"
                  type="button"
                  onClick={() => {
                    setAssetName("");
                    setSerialNumber("");
                    setCategory("ноутбук");
                    setPrice("1500");
                    setPriority(5);
                  }}
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 2,
                    px: 3,
                    py: 1.5,
                    bgcolor: "background.paper",
                    color: "text.primary",
                    fontSize: "1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Очистити форму
                </Box>
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </Box>
  );
}
