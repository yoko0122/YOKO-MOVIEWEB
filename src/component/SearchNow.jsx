import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export const SearchNow = ({ genre }) => {
    return (
        <div >
           <div className="flex">
                <Button className="rounded-full flex h-[25px]">
                        {genre?.name}
                    <ChevronRight className="w-1 h-2" />
                </Button>
          </div>
        </div>
    )
}