import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ArchivesPage } from "./pages/ArchivesPage";
import { HistoryPage } from "./pages/HistoryPage";
import { MediaPage } from "./pages/MediaPage";
import { PublicationsPage } from "./pages/PublicationsPage";
import { EventsPage } from "./pages/EventsPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "archives", Component: ArchivesPage },
      { path: "history", Component: HistoryPage },
      { path: "media", Component: MediaPage },
      { path: "publications", Component: PublicationsPage },
      { path: "events", Component: EventsPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
