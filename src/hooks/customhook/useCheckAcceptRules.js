import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

function useCheckAcceptRules() {
  const { acceptrules } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (acceptrules) return;

    navigate("/dashboard/termsblog");
    toast({
      title: "access the content",
      description: "please read and accept the terms and conditions",
    });
    return;
  }, [navigate, toast, acceptrules]);
}

export default useCheckAcceptRules;
