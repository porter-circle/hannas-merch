import { getBalance } from "../_api/api";
import { getSession } from "../_auth/auth";

type BalanceAmountProps = {
  amount: string;
};

const BalanceAmount = ({ amount }: BalanceAmountProps) => (
  <h3 className="text-5xl">
    {amount}
    <span className="text-3xl">&nbsp;Hanna Coin</span>
  </h3>
);

const Balance = async () => {
  const session = await getSession();
  const data = await getBalance(session.user.user_name);
  const amount = data.response.data.tokenBalances[0].amount;

  return (
    <div className="flex items-center justify-center h-full">
      <BalanceAmount amount={amount} />
    </div>
  );
};

export default Balance;
