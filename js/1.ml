let inc_all l = List.map (fun x -> x + 1) l;;

let map f l =
  match l with
  | [] -> []
  | hd :: tl -> (f hd) :: (map f tl)