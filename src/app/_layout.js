import { router, Stack, useSegments } from "expo-router";
import { useEffect } from "react";
import { AppProvider } from "../hooks";
import { useAuth } from "../hooks/Auth";

const StackLayout = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.autenticated) {
      router.replace("signIn")
    } else {
        router.replace("(protected)");
    }
  }, [user]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(protected)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default function _Layout() {
  return (
    <AppProvider>
      <StackLayout />
    </AppProvider>
  );
}