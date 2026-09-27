import { Tag, TagGroup, TagList } from "../base/tags/tags";

export default function TechStack() {
  return (
    <>
      {" "}
      <h3 className="mb-2 mt-4 text-sm font-semibold text-gray-700">
        Frontend
      </h3>
      <TagGroup label="Frontend" size="md">
        <TagList className="flex gap-2">
          <Tag>HTML</Tag>
          <Tag>CSS</Tag>
          <Tag>JavaScript</Tag>
          <Tag>React</Tag>
        </TagList>
      </TagGroup>{" "}
      <h3 className="mb-2 mt-4 text-sm font-semibold text-gray-700">Backend</h3>
      <TagGroup label="Backend" size="md">
        <TagList className="flex gap-2">
          <Tag>Node.js</Tag>
          <Tag>Express.js</Tag>
        </TagList>
      </TagGroup>{" "}
      <h3 className="mb-2 mt-4 text-sm font-semibold text-gray-700">
        Database
      </h3>
      <TagGroup label="Database" size="md">
        <TagList className="flex gap-2">
          <Tag>PostgresQL</Tag>
          <Tag>MongoDB</Tag>
        </TagList>
      </TagGroup>{" "}
      <h3 className="mb-2 mt-4 text-sm font-semibold text-gray-700">
        Infrastructure & DevOps
      </h3>
      <TagGroup label="Infrastructure & DevOps">
        <TagList className="flex gap-2">
          <Tag>Docker</Tag>
        </TagList>
      </TagGroup>
    </>
  );
}
