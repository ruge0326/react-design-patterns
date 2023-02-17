import { useReplicateContext } from "../store/ReplicateProvider";

export const SwitchTheme = () => {
  const theme = useReplicateContext();
  return <button onClick={theme.toggleTheme}>Toggle Theme</button>;
};
