import { useSelector } from "react-redux";
export default function ProtectedFacultyComponent({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser.role == "FACULTY") {
    return children;
  }}