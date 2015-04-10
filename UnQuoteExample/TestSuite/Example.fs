namespace Example

module Code = 
    let sumSeq sequence1 = Seq.fold (fun acc elem -> acc + elem) 0 sequence1

    let rec remove_if l predicate =
        match l with
        | [] -> []
        | x::rest -> if predicate(x) then 
                        (remove_if rest predicate) 
                     else 
                         x::(remove_if rest predicate)

    let sumAList list = 
        //let newList = remove_if list (fun x -> x > 0)
        List.reduce (fun acc elem -> acc + elem) list
