let turshaklar = ['Ibrohim', 'Sulton', 'Saidazim', 'Abdulloh', 'Sardor']


alert(`turshaklar royxati\n\n ${turshaklar}`)


alert(`Длинна массива равна ${turshaklar.length}`)

let confirmation = confirm('Хочешь удалить последнтй элемент массива?')

if (confirmation == true) {
    turshaklar.pop()
    alert (turshaklar)
}else{
    alert('Последний элемент не удалён')
    alert(turshaklar)
}