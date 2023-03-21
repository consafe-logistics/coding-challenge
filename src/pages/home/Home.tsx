import { ReactElement } from "react";
import { Link } from "react-router-dom";
import SectionDescription from "../../components/SectionDescription";
import SectionHeader from "../../components/SectionHeader";
import SectionStack from "../../components/SectionStack";

function Home(): ReactElement {
  return (
    <SectionStack>
      <SectionHeader>Web Developer - Interview assignment</SectionHeader>
      <SectionDescription>
        A College student wrote this, with our tech stack, and it works, but it needs a lot fixes.
        <br />We are also missing the ability to show selected article.
        <br />
        <br />
        You need to clean the code and use the tools we have like: <br />
        - Typescript<br />
        - The use of MVVM pattern<br />
        - Handle the state with Mobx<br />
        - Dependency Injection<br />
        - and Jest for testing.<br />
        <br />
        We don't need more or other tools, but you have the ability to structure and refine code as you please, as long as the functionality is the same.
        <br />
        <br />
        Optional: Write some tests that you think is necessary.
      </SectionDescription>
      <Link to='search'>Go to the Search Page</Link>
    </SectionStack>
  );
}

export default Home;