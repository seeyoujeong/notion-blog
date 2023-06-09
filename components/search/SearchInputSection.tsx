import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import PageHead from "../layout/PageHead";

function SearchInputSection() {
  const [value, setValue] = useState("");
  const { push, query } = useRouter();
  const searchQuery = query.query?.toString();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedValue = value.trim();

    if (!trimmedValue) {
      return;
    }

    push(`/search?query=${trimmedValue}`);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setValue(searchQuery ?? "");
  }, [searchQuery]);

  return (
    <>
      {searchQuery ? <PageHead title={`${searchQuery} - Search`} /> : null}
      <section className="">
        <div className="w-5/6 max-w-5xl mx-auto py-10 lg:px-4">
          <form className="relative" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Search"
              className="p-4 text-xl w-full rounded-2xl outline-none border-2 border-black"
              value={value}
              onChange={onChange}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-gray-100 p-2 rounded-2xl"
            >
              <AiOutlineSearch size={"2rem"} color="gray" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default SearchInputSection;
