import { ParsedDatabaseItem } from "@/utils/parseDatabaseItems";
import CardList from "../card/CardList";
import Pagination from "../common/Pagination";
import { ITEMS_PER_PAGE } from "@/const/const";

interface CardSectionProps {
  cardItems: ParsedDatabaseItem[];
  totalLength: number;
}

function CardSection({ cardItems, totalLength }: CardSectionProps) {
  return (
    <section>
      <div className="max-w-5xl w-4/5 mx-auto flex flex-col gap-6 py-8 px-4">
        <h3 className="font-bold text-3xl">Posts</h3>
        <CardList cardItems={cardItems} />
        <Pagination totalPage={Math.ceil(totalLength / ITEMS_PER_PAGE)} />
      </div>
    </section>
  );
}

export default CardSection;
