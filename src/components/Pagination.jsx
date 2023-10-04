export default function Pagination({ count, func, opened, light }) {
  let pages = [];
  for (let i = 0; i < count; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center w-full p-1">
      {pages.map((page) => {
        return (
          <p
            className={
              opened === page
                ? `${
                    light
                      ? "bg-gray-900 text-white"
                      : "text-gray-900 bg-gray-100"
                  } w-[30px] h-[30px] cursor-pointer rounded-full shadow-md  text-center py-1 ring-gray-400 ring-1 m-4`
                : `${
                    !light ? "bg-gray-900 text-white" : "text-gray-900 bg-white"
                  } w-[30px] h-[30px] cursor-pointer rounded-full shadow-md  text-center p-[0.1rem] ring-gray-400 ring-1 m-4`
            }
            onClick={() => {
              func(page);
            }}
          >
            {page + 1}
          </p>
        );
      })}
    </div>
  );
}
