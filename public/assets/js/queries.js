var theQuery = " data := //ancestry totClicksMonth := solve 'month {month:'month, totClicks: sum(data.Clicks where data.month='month)} totClicksMonth "
var top5PlacementsByConv = "data := //ancestry dataWithTotConv := data with {totConv:data.\"Total Registrations\" + data.\"View Signups\"} conversionsByPlacement := solve 'PlacementGroup {\"Placement Group\": 'PlacementGroup, Totconversions: sum(dataWithTotConv.totConv where dataWithTotConv.\"Placement Group\" = 'PlacementGroup)} rank := std::stats::rank(neg conversionsByPlacement.Totconversions) conversionsByPlacement where rank <= 5"

