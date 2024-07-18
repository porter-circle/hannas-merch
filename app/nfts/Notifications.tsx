"use client";

import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "../_api/api";

const Notifications = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["notifications"],
    queryFn: getNotifications,
    // refetchInterval: 5000,
  });

  console.log({ data, error, isPending });

  return null;
};

export default Notifications;
