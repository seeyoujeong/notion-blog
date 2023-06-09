import { ITEMS_PER_PAGE } from "@/const/const";
import { ParsedDatabaseItemType } from "@/utils/parseDatabaseItems";
import CardList from "../card/CardList";
import Pagination from "../common/Pagination";

interface CardSectionProps {
  cardItems: ParsedDatabaseItemType[];
  totalLength: number;
}

function CardSection({ cardItems, totalLength }: CardSectionProps) {
  return (
    <section>
      <div className="max-w-5xl w-4/5 mx-auto flex flex-col gap-6 pt-2 pb-8 px-4">
        <h3 className="font-bold text-3xl">Posts</h3>
        <CardList cardItems={cardItems} />
        <Pagination totalPage={Math.ceil(totalLength / ITEMS_PER_PAGE)} />
      </div>
    </section>
  );
}

export default CardSection;
