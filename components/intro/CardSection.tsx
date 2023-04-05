import { ParsedDatabaseItem } from "@/utils/parseDatabaseItems";
import CardList from "../card/CardList";

interface CardSectionProps {
  cardItems: ParsedDatabaseItem[];
}

function CardSection({ cardItems }: CardSectionProps) {
  return (
    <section>
      <div className="w-4/5 mx-auto flex flex-col gap-6 py-8">
        <h3 className="font-bold text-3xl">Posts</h3>
        <CardList cardItems={cardItems} />
      </div>
    </section>
  );
}

export default CardSection;