const PokerCard = ({number}) => {
  return (
    <div class="flex items-center justify-center h-36 w-28 box-border bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover: cursor-pointer">
      {number}
    </div>
  )
}

export default PokerCard