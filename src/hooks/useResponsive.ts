import { useState, useEffect, useCallback } from 'react'

const useResponsive = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null) // Giá trị mặc định là null, nghĩa là chưa xác định
  const [isClient, setIsClient] = useState<boolean>(false) // Kiểm tra xem có đang chạy ở phía client hay không

  // Hàm kiểm tra và cập nhật trạng thái mobile
  const checkDevice = useCallback(() => {
    // Kiểm tra độ rộng cửa sổ và thiết bị có phải là mobile không
    const isMobileNow = window.innerWidth <= breakpoint
    setIsMobile(isMobileNow) // Cập nhật trạng thái mobile
  }, [breakpoint])

  useEffect(() => {
    // Đảm bảo là code chỉ chạy trên client
    if (typeof window !== 'undefined') {
      setIsClient(true) // Đảm bảo là đang chạy ở phía client
      checkDevice() // Kiểm tra lần đầu khi trang được tải

      // Lắng nghe sự kiện resize để cập nhật lại trạng thái khi thay đổi kích thước
      const handleResize = () => checkDevice()

      window.addEventListener('resize', handleResize)

      // Cleanup khi component unmount
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [checkDevice]) // Khi `breakpoint` thay đổi, effect sẽ chạy lại

  // Nếu chưa xác định isMobile (vì chưa có thông tin về window), thì không render gì
  if (!isClient || isMobile === null) {
    return null // Trả về false hoặc có thể trả về null để tránh render sai
  }

  return isMobile // Trả về giá trị của isMobile khi đã chắc chắn
}

export default useResponsive
