const PokerCard = ({number}) => {
  return (
    <div class="flex items-center justify-center h-48 w-40 box-border bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover: cursor-pointer">
      {number}
    </div>
  )
}

export default PokerCard