interface Props {
    items: Item[];
  }
  type Item = {
    name: string;
  };
  
function DropDownItem({ items }: Props) {
    return (
      <>
        {items.map((item: Item, index: number) => (
          <li key={index}>
              <button>
                {item.name}
              </button>
          </li>
        ))}
      </>
    );
  }
  
export default DropDownItem;