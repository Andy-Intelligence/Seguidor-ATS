import Link from "next/link";
import List from '../comps/List'
import Search from "../comps/Search";
const CandidateHeader = () => {
    return (
        <div className="bg-white p-2">
            <div className="flex align-center">
        <Link href="/">
          <h1 className="font-normal text-5xl">Logo</h1>
        </Link>
        <nav>
          <ul className="items-center mt-5 ml-10">
            <List list="Overview" />
            <List list="Mailbox" />
            <Link href="/Jobs">
              <List list="Jobs" />
            </Link>
          </ul>
        </nav>
        <Search />
        </div>
        </div>
    );
}

export default CandidateHeader;
