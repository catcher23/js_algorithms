def  cutSticks( lengths)
    min = lengths.min
    newArr = []
    newArr2 = [lengths.length]
    while true
        lengths.each do |length|
            diff = length - min
            if diff > 0
                newArr << diff
            end
        end
        break if newArr.length == 0
        lengths = newArr
        newArr2 << newArr.length
        newArr = []
    end
    newArr2.each do |el|
        p el
    end
end
