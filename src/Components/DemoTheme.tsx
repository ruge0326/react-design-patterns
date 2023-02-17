import { useReplicateContext } from "../store/ReplicateProvider";

export function DemoTheme() {
  const theme = useReplicateContext();
  return <li style={theme.theme}>LIST</li>;
}
