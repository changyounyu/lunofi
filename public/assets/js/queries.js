var conversionsPerMonth = " data := //ancestry totClicksMonth := solve 'month {month:'month, totClicks: sum(data.Clicks where data.month='month)} totClicksMonth "

var top5PlacementsByConv = "data := //ancestry dataWithTotConv := data with {totConv:data.\"Total Registrations\" + data.\"View Signups\"} conversionsByPlacement := solve 'PlacementGroup {\"Placement Group\": 'PlacementGroup, Totconversions: sum(dataWithTotConv.totConv where dataWithTotConv.\"Placement Group\" = 'PlacementGroup)} rank := std::stats::rank(neg conversionsByPlacement.Totconversions) conversionsByPlacement where rank <= 5"

var costPerConversion = "data := //ancestry dataWithTotConv := data with {totConv:data.\"Total Registrations\" + data.\"View Signups\"} totConversions := sum(dataWithTotConv.totConv) totMediaCost := sum(dataWithTotConv.\"Media Cost\") totMediaCost/totConversions"

var interactionHisto = "data := //Conversions/Interaction interactionCounts := solve 'id {\"id\": 'id, interactions: max(data.interactionNum where data.id = 'id)} histInteractions := solve 'interactions {interactions: 'interactions, conversions: count(interactionCounts.interactions where interactionCounts.interactions = 'interactions)} histInteractions"
