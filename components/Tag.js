const CLASS_BY_KIND = {
  carried: "tag tag-carried",
  modernized: "tag tag-modernized",
  new: "tag tag-new",
};

const LABEL_BY_KIND = {
  carried: "Carried forward",
  modernized: "Modernized",
  new: "Net-new",
};

export default function Tag({ kind }) {
  return <span className={CLASS_BY_KIND[kind]}>{LABEL_BY_KIND[kind]}</span>;
}
