import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import Link from "next/link"
import { useEffect, useState } from "react"
import { GetGenreById } from "../../utils/GetgenreById"
import { SearchNow } from "./searchNow"

export const HeaderGenre = () => {
    const [movieGenre, setMovieGenre] = useState([]);

    useEffect(() => {
        const getMovieGenre = async () => {
            const data = await GetGenreById();
            console.log(data);
            setMovieGenre(data);
        };
        getMovieGenre();
    }, []);
    return (
        <div>
            <Link href={`/genre/genre`}>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Genre</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">        
                            {movieGenre.genres?.map((genre) => (
                                <SearchNow genre={genre} key={genre.id} />
                            ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </Link>
        </div>
    )
}
