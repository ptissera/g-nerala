import { Layout } from "expo-router"
import { StatusBar } from "expo-status-bar"

export default function App() {
  return (
    <RootLayout />
  );
}


function RootLayout() {

    return (
      // Create a basic custom layout to render some children routes.
      <Layout>
        <StatusBar style='light' />
        {/* Renders the selected child element. */}
        <Layout.Children />
      </Layout>
    );
  }
