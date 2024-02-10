import SearchCard from "@/components/SearchCard";
import SearchInput from "@/components/SearchInput";
import SubjectList from "@/components/SubjectList";
import SubjectView from "@/components/SubjectView";
import { Courses, branchList, semesterList } from "@/config";
import LayoutWrapper from "@/layouts/LayoutWrapper";
import _ from "lodash";
import { Metadata } from "next";
import { FC } from "react";

type Props = {
    searchParams: { semester: string; branch: string; subject: string };
};

export async function generateMetadata({
    searchParams,
}: Props): Promise<Metadata> {
    const semester = searchParams.semester;
    const branch = searchParams.branch;
    const subject = searchParams.subject;

    if (!semester && branch && !subject) {
        return {
            title: {
                default: `B.Tech | ${branch}`,
                template: `SyllabusX | %s`,
            },
            description:
                "Embark on a tech-centric academic voyage with SyllabusX's B.Tech page. Uncover a treasure trove of syllabi and study materials meticulously curated for Guru Gobind Singh Indraprastha University (GGSIPU) B.Tech programs.",
            openGraph: {
                title: `B.Tech | ${branch}`,
                description:
                    "Embark on a tech-centric academic voyage with SyllabusX's B.Tech page. Uncover a treasure trove of syllabi and study materials meticulously curated for Guru Gobind Singh Indraprastha University (GGSIPU) B.Tech programs.",
                url: "https://syllabusx.live",
                siteName: "SyllabusX",
                locale: "en_US",
                type: "website",
            },
            twitter: {
                title: `B.Tech | ${branch}`,
                description:
                    "Embark on a tech-centric academic voyage with SyllabusX's B.Tech page. Uncover a treasure trove of syllabi and study materials meticulously curated for Guru Gobind Singh Indraprastha University (GGSIPU) B.Tech programs.",
                card: "summary_large_image",
                site: "https://syllabusx.live",
            },
        };
    }

    if (semester && !branch && !subject) {
        return {
            title: {
                default: `B.Tech | ${semester}`,
                template: `SyllabusX | %s`,
            },
            description:
                "Embark on a tech-centric academic voyage with SyllabusX's B.Tech page. Uncover a treasure trove of syllabi and study materials meticulously curated for Guru Gobind Singh Indraprastha University (GGSIPU) B.Tech programs.",
            openGraph: {
                title: `B.Tech | ${semester}`,
                description:
                    "Embark on a tech-centric academic voyage with SyllabusX's B.Tech page. Uncover a treasure trove of syllabi and study materials meticulously curated for Guru Gobind Singh Indraprastha University (GGSIPU) B.Tech programs.",
                url: "https://syllabusx.live",
                siteName: "SyllabusX",
                locale: "en_US",
                type: "website",
            },
            twitter: {
                title: `B.Tech | ${semester}`,
                description:
                    "Embark on a tech-centric academic voyage with SyllabusX's B.Tech page. Uncover a treasure trove of syllabi and study materials meticulously curated for Guru Gobind Singh Indraprastha University (GGSIPU) B.Tech programs.",
                card: "summary_large_image",
                site: "https://syllabusx.live",
            },
        };
    }

    if (semester && branch && !subject) {
        return {
            title: {
                default: `B.Tech | ${semester} | ${branch}`,
                template: `SyllabusX | %s`,
            },
            description:
                "Embark on a tech-centric academic voyage with SyllabusX's B.Tech page. Uncover a treasure trove of syllabi and study materials meticulously curated for Guru Gobind Singh Indraprastha University (GGSIPU) B.Tech programs.",
            openGraph: {
                title: `B.Tech | ${semester} | ${branch}`,
                description:
                    "Embark on a tech-centric academic voyage with SyllabusX's B.Tech page. Uncover a treasure trove of syllabi and study materials meticulously curated for Guru Gobind Singh Indraprastha University (GGSIPU) B.Tech programs.",
                url: "https://syllabusx.live",
                siteName: "SyllabusX",
                locale: "en_US",
                type: "website",
            },
            twitter: {
                title: `B.Tech | ${semester} | ${branch}`,
                description:
                    "Embark on a tech-centric academic voyage with SyllabusX's B.Tech page. Uncover a treasure trove of syllabi and study materials meticulously curated for Guru Gobind Singh Indraprastha University (GGSIPU) B.Tech programs.",
                card: "summary_large_image",
                site: "https://syllabusx.live",
            },
        };
    }

    if (!semester && !branch && subject) {
        return {
            title: {
                default: `B.Tech | ${_.startCase(_.toLower(subject))}`,
                template: `SyllabusX | %s`,
            },
            description:
                "Embark on a tech-centric academic voyage with SyllabusX's B.Tech page. Uncover a treasure trove of syllabi and study materials meticulously curated for Guru Gobind Singh Indraprastha University (GGSIPU) B.Tech programs.",
            openGraph: {
                title: `B.Tech | ${_.startCase(_.toLower(subject))}`,
                description:
                    "Embark on a tech-centric academic voyage with SyllabusX's B.Tech page. Uncover a treasure trove of syllabi and study materials meticulously curated for Guru Gobind Singh Indraprastha University (GGSIPU) B.Tech programs.",
                url: "https://syllabusx.live",
                siteName: "SyllabusX",
                locale: "en_US",
                type: "website",
            },
            twitter: {
                title: `B.Tech | ${_.startCase(_.toLower(subject))}`,
                description:
                    "Embark on a tech-centric academic voyage with SyllabusX's B.Tech page. Uncover a treasure trove of syllabi and study materials meticulously curated for Guru Gobind Singh Indraprastha University (GGSIPU) B.Tech programs.",
                card: "summary_large_image",
                site: "https://syllabusx.live",
            },
        };
    }

    if (!semester && !branch && !subject) {
        return {
            title: {
                default: `B.Tech`,
                template: `SyllabusX | %s`,
            },
            description:
                "Embark on a tech-centric academic voyage with SyllabusX's B.Tech page. Uncover a treasure trove of syllabi and study materials meticulously curated for Guru Gobind Singh Indraprastha University (GGSIPU) B.Tech programs.",
            openGraph: {
                title: `B.Tech`,
                description:
                    "Embark on a tech-centric academic voyage with SyllabusX's B.Tech page. Uncover a treasure trove of syllabi and study materials meticulously curated for Guru Gobind Singh Indraprastha University (GGSIPU) B.Tech programs.",
                url: "https://syllabusx.live",
                siteName: "SyllabusX",
                locale: "en_US",
                type: "website",
            },
            twitter: {
                title: `B.Tech`,
                description:
                    "Embark on a tech-centric academic voyage with SyllabusX's B.Tech page. Uncover a treasure trove of syllabi and study materials meticulously curated for Guru Gobind Singh Indraprastha University (GGSIPU) B.Tech programs.",
                card: "summary_large_image",
                site: "https://syllabusx.live",
            },
        };
    }

    return {
        title: {
            default: `B.Tech | ${semester} | ${branch} | ${_.startCase(
                _.toLower(subject)
            )}`,
            template: `SyllabusX | %s`,
        },
        description:
            "Embark on a tech-centric academic voyage with SyllabusX's B.Tech page. Uncover a treasure trove of syllabi and study materials meticulously curated for Guru Gobind Singh Indraprastha University (GGSIPU) B.Tech programs.",
        openGraph: {
            title: `B.Tech | ${semester} | ${branch} | ${_.startCase(
                _.toLower(subject)
            )}`,
            description:
                "Embark on a tech-centric academic voyage with SyllabusX's B.Tech page. Uncover a treasure trove of syllabi and study materials meticulously curated for Guru Gobind Singh Indraprastha University (GGSIPU) B.Tech programs.",
            url: "https://syllabusx.live",
            siteName: "SyllabusX",
            locale: "en_US",
            type: "website",
        },
        twitter: {
            title: `B.Tech`,
            description:
                "Embark on a tech-centric academic voyage with SyllabusX's B.Tech page. Uncover a treasure trove of syllabi and study materials meticulously curated for Guru Gobind Singh Indraprastha University (GGSIPU) B.Tech programs.",
            card: "summary_large_image",
            site: "https://syllabusx.live",
        },
    };
}

interface pageProps {
    searchParams: {
        semester: string | null;
        branch: string | null;
        subject: string | null;
    };
}

const page: FC<pageProps> = ({ searchParams }) => {
    return (
        <LayoutWrapper className="min-h-[calc(100vh-7rem)] py-20">
            <div className="grid grid-cols-3 gap-10">
                <SearchCard
                    title="B.Tech"
                    description="Who needs sleep when you can engineer dreams?"
                >
                    <SearchInput
                        label="semester"
                        searchList={semesterList}
                        search={false}
                    />
                    <SearchInput
                        label="branch"
                        searchList={branchList}
                        search={false}
                    />
                </SearchCard>
                {searchParams.semester && searchParams.branch ? (
                    <SubjectList course={Courses.BTECH} />
                ) : null}
                {searchParams.semester &&
                searchParams.branch &&
                searchParams.subject ? (
                    <SubjectView course="btech" />
                ) : null}
            </div>
        </LayoutWrapper>
    );
};

export default page;
