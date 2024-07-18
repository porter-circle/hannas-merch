import { useEffect } from "react";
import usePrevious from "./usePrevious";

const useNotifyReward = (
  hasAccess: boolean,
  triggerToast: (msg: string, type: "info") => void
) => {
  const prevHasAccess = usePrevious(hasAccess);

  useEffect(() => {
    if (prevHasAccess === false && hasAccess === true) {
      triggerToast("You have been rewarded Hanna Coin!", "info");
    }
  }, [hasAccess, prevHasAccess, triggerToast]);
};

export default useNotifyReward;
