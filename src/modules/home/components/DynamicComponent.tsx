export function DynamicComponent() {
  // Giả lập fetch dữ liệu
  const data: any = fetchData()
  return <div>{data}</div>
}

function fetchData() {
  // Giả lập độ trễ dữ liệu
  return new Promise((resolve) => {
    setTimeout(() => resolve('This is dynamic data loaded after delay.'), 2000)
  })
}
