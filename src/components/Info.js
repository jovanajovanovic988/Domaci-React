import {Link} from 'react-router-dom'//da se ne refresh-uje
const Info = () => {
    return (
        <div>
            <h3>Poslastičarnica "Slatkiš"</h3>
            <small>Belgrade, Serbia</small>
            <p>Hvala Vam što ste na trenutak svratili u naš svet slatke čarolije, a mi ćemo vam predstaviti šta sve imamo u ponudi za vas.
            Volite torte? Ili vam se uskoro bliži neki važan dan (rođendan, venčanje, godišnjica...) tu smo za vas. Zajedno sa vama krećemo u slatku avanturu da sve vaše želje pretvorimo u stvarnost.
            Naši slatkiši se prave po tradicionalnim receptima i sa kvalitetnim, prirodnim materijalima: orah, badem, lešnik, puter, jaja, voće, slatka pavlaka, čokolada...
            Dekoracija je proizvod vaše mašte i naših veštih majstora.</p>
            <Link to='/'>Vrati se nazad na porudžbine</Link>
        </div>
    )
}

export default Info