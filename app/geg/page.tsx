import { Divider } from "@heroui/divider";
import React from "react";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => (
  <section>
    <h3 className="text-gray-700 text-xl font-semibold">{title}</h3>
    <Divider className="my-2" />
    <div>{children}</div>
  </section>
);

const GegPage = () => {
  return (
    <main className="px-4 md:px-8 lg:px-16">
      <Section title="Typography">
        {/* Headings */}
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        {/* Paragraphs */}
        <p>
          Paragraph/Body text: Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sed, quibusdam dolorum architecto quae hic
          voluptates? Eaque dicta vel praesentium maiores quia eos doloremque,
          blanditiis, minus totam, perspiciatis nulla ipsum iure!
        </p>
        <p>
          Another paragraph to test spacing. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Illum optio doloremque nulla saepe?
        </p>

        {/* Lists */}
        <ul className="pl-8 list-disc">
          <li>Unordered item 1</li>
          <li>Unordered item 2</li>
          <li>Unordered item 3</li>
        </ul>
        <ol className="pl-8 list-decimal">
          <li>Ordered item 1</li>
          <li>Ordered item 2</li>
          <li>Ordered item 3</li>
        </ol>

        {/* Links */}
        <p>
          Check out <a href="https://example.com">this link</a> for more info.
        </p>

        {/* Blockquote */}
        <blockquote>
          "This is a blockquote example to test styling of quoted text."
        </blockquote>

        {/* Horizontal rule */}
        <hr />
      </Section>
    </main>
  );
};

export default GegPage;
