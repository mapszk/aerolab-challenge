import { getUser } from "@/actions/actions";
import Banner from "@/components/Banner";
import Container from "@/components/Container";
import HistoryList from "@/components/History/HistoryList";
import { IUserData } from "@/interfaces/User";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const userData: IUserData = await getUser();

  return (
    <main className="bg-gray-100 flex flex-col items-center justify-between">
      <Banner title="Redeem history" />
      <Container className="my-8 lg:my-16">
        <HistoryList
          searchParams={searchParams}
          history={userData.redeemHistory}
        />
      </Container>
    </main>
  );
}
