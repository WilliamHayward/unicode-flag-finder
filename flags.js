var Flags;
(function (Flags) {
    var flags = { "AD": { "ISO": "AD", "native": "🇦🇩", "unicode": "U+1F1E6 U+1F1E9", "name": "Andorra" }, "AE": { "ISO": "AE", "native": "🇦🇪", "unicode": "U+1F1E6 U+1F1EA", "name": "United Arab Emirates" }, "AF": { "ISO": "AF", "native": "🇦🇫", "unicode": "U+1F1E6 U+1F1EB", "name": "Afghanistan" }, "AG": { "ISO": "AG", "native": "🇦🇬", "unicode": "U+1F1E6 U+1F1EC", "name": "Antigua and Barbuda" }, "AI": { "ISO": "AI", "native": "🇦🇮", "unicode": "U+1F1E6 U+1F1EE", "name": "Anguilla" }, "AL": { "ISO": "AL", "native": "🇦🇱", "unicode": "U+1F1E6 U+1F1F1", "name": "Albania" }, "AM": { "ISO": "AM", "native": "🇦🇲", "unicode": "U+1F1E6 U+1F1F2", "name": "Armenia" }, "AO": { "ISO": "AO", "native": "🇦🇴", "unicode": "U+1F1E6 U+1F1F4", "name": "Angola" }, "AQ": { "ISO": "AQ", "native": "🇦🇶", "unicode": "U+1F1E6 U+1F1F6", "name": "Antarctica" }, "AR": { "ISO": "AR", "native": "🇦🇷", "unicode": "U+1F1E6 U+1F1F7", "name": "Argentina" }, "AS": { "ISO": "AS", "native": "🇦🇸", "unicode": "U+1F1E6 U+1F1F8", "name": "American Samoa" }, "AT": { "ISO": "AT", "native": "🇦🇹", "unicode": "U+1F1E6 U+1F1F9", "name": "Austria" }, "AU": { "ISO": "AU", "native": "🇦🇺", "unicode": "U+1F1E6 U+1F1FA", "name": "Australia" }, "AW": { "ISO": "AW", "native": "🇦🇼", "unicode": "U+1F1E6 U+1F1FC", "name": "Aruba" }, "AX": { "ISO": "AX", "native": "🇦🇽", "unicode": "U+1F1E6 U+1F1FD", "name": "Åland Islands" }, "AZ": { "ISO": "AZ", "native": "🇦🇿", "unicode": "U+1F1E6 U+1F1FF", "name": "Azerbaijan" }, "BA": { "ISO": "BA", "native": "🇧🇦", "unicode": "U+1F1E7 U+1F1E6", "name": "Bosnia and Herzegovina" }, "BB": { "ISO": "BB", "native": "🇧🇧", "unicode": "U+1F1E7 U+1F1E7", "name": "Barbados" }, "BD": { "ISO": "BD", "native": "🇧🇩", "unicode": "U+1F1E7 U+1F1E9", "name": "Bangladesh" }, "BE": { "ISO": "BE", "native": "🇧🇪", "unicode": "U+1F1E7 U+1F1EA", "name": "Belgium" }, "BF": { "ISO": "BF", "native": "🇧🇫", "unicode": "U+1F1E7 U+1F1EB", "name": "Burkina Faso" }, "BG": { "ISO": "BG", "native": "🇧🇬", "unicode": "U+1F1E7 U+1F1EC", "name": "Bulgaria" }, "BH": { "ISO": "BH", "native": "🇧🇭", "unicode": "U+1F1E7 U+1F1ED", "name": "Bahrain" }, "BI": { "ISO": "BI", "native": "🇧🇮", "unicode": "U+1F1E7 U+1F1EE", "name": "Burundi" }, "BJ": { "ISO": "BJ", "native": "🇧🇯", "unicode": "U+1F1E7 U+1F1EF", "name": "Benin" }, "BL": { "ISO": "BL", "native": "🇧🇱", "unicode": "U+1F1E7 U+1F1F1", "name": "Saint Barthélemy" }, "BM": { "ISO": "BM", "native": "🇧🇲", "unicode": "U+1F1E7 U+1F1F2", "name": "Bermuda" }, "BN": { "ISO": "BN", "native": "🇧🇳", "unicode": "U+1F1E7 U+1F1F3", "name": "Brunei Darussalam" }, "BO": { "ISO": "BO", "native": "🇧🇴", "unicode": "U+1F1E7 U+1F1F4", "name": "Bolivia" }, "BQ": { "ISO": "BQ", "native": "🇧🇶", "unicode": "U+1F1E7 U+1F1F6", "name": "Bonaire| Sint Eustatius and Saba" }, "BR": { "ISO": "BR", "native": "🇧🇷", "unicode": "U+1F1E7 U+1F1F7", "name": "Brazil" }, "BS": { "ISO": "BS", "native": "🇧🇸", "unicode": "U+1F1E7 U+1F1F8", "name": "Bahamas" }, "BT": { "ISO": "BT", "native": "🇧🇹", "unicode": "U+1F1E7 U+1F1F9", "name": "Bhutan" }, "BV": { "ISO": "BV", "native": "🇧🇻", "unicode": "U+1F1E7 U+1F1FB", "name": "Bouvet Island" }, "BW": { "ISO": "BW", "native": "🇧🇼", "unicode": "U+1F1E7 U+1F1FC", "name": "Botswana" }, "BY": { "ISO": "BY", "native": "🇧🇾", "unicode": "U+1F1E7 U+1F1FE", "name": "Belarus" }, "BZ": { "ISO": "BZ", "native": "🇧🇿", "unicode": "U+1F1E7 U+1F1FF", "name": "Belize" }, "CA": { "ISO": "CA", "native": "🇨🇦", "unicode": "U+1F1E8 U+1F1E6", "name": "Canada" }, "CC": { "ISO": "CC", "native": "🇨🇨", "unicode": "U+1F1E8 U+1F1E8", "name": "Cocos (Keeling) Islands" }, "CD": { "ISO": "CD", "native": "🇨🇩", "unicode": "U+1F1E8 U+1F1E9", "name": "Congo" }, "CF": { "ISO": "CF", "native": "🇨🇫", "unicode": "U+1F1E8 U+1F1EB", "name": "Central African Republic" }, "CG": { "ISO": "CG", "native": "🇨🇬", "unicode": "U+1F1E8 U+1F1EC", "name": "Congo" }, "CH": { "ISO": "CH", "native": "🇨🇭", "unicode": "U+1F1E8 U+1F1ED", "name": "Switzerland" }, "CI": { "ISO": "CI", "native": "🇨🇮", "unicode": "U+1F1E8 U+1F1EE", "name": "Côte D'Ivoire" }, "CK": { "ISO": "CK", "native": "🇨🇰", "unicode": "U+1F1E8 U+1F1F0", "name": "Cook Islands" }, "CL": { "ISO": "CL", "native": "🇨🇱", "unicode": "U+1F1E8 U+1F1F1", "name": "Chile" }, "CM": { "ISO": "CM", "native": "🇨🇲", "unicode": "U+1F1E8 U+1F1F2", "name": "Cameroon" }, "CN": { "ISO": "CN", "native": "🇨🇳", "unicode": "U+1F1E8 U+1F1F3", "name": "China" }, "CO": { "ISO": "CO", "native": "🇨🇴", "unicode": "U+1F1E8 U+1F1F4", "name": "Colombia" }, "CR": { "ISO": "CR", "native": "🇨🇷", "unicode": "U+1F1E8 U+1F1F7", "name": "Costa Rica" }, "CU": { "ISO": "CU", "native": "🇨🇺", "unicode": "U+1F1E8 U+1F1FA", "name": "Cuba" }, "CV": { "ISO": "CV", "native": "🇨🇻", "unicode": "U+1F1E8 U+1F1FB", "name": "Cape Verde" }, "CW": { "ISO": "CW", "native": "🇨🇼", "unicode": "U+1F1E8 U+1F1FC", "name": "Curaçao" }, "CX": { "ISO": "CX", "native": "🇨🇽", "unicode": "U+1F1E8 U+1F1FD", "name": "Christmas Island" }, "CY": { "ISO": "CY", "native": "🇨🇾", "unicode": "U+1F1E8 U+1F1FE", "name": "Cyprus" }, "CZ": { "ISO": "CZ", "native": "🇨🇿", "unicode": "U+1F1E8 U+1F1FF", "name": "Czech Republic" }, "DE": { "ISO": "DE", "native": "🇩🇪", "unicode": "U+1F1E9 U+1F1EA", "name": "Germany" }, "DJ": { "ISO": "DJ", "native": "🇩🇯", "unicode": "U+1F1E9 U+1F1EF", "name": "Djibouti" }, "DK": { "ISO": "DK", "native": "🇩🇰", "unicode": "U+1F1E9 U+1F1F0", "name": "Denmark" }, "DM": { "ISO": "DM", "native": "🇩🇲", "unicode": "U+1F1E9 U+1F1F2", "name": "Dominica" }, "DO": { "ISO": "DO", "native": "🇩🇴", "unicode": "U+1F1E9 U+1F1F4", "name": "Dominican Republic" }, "DZ": { "ISO": "DZ", "native": "🇩🇿", "unicode": "U+1F1E9 U+1F1FF", "name": "Algeria" }, "EC": { "ISO": "EC", "native": "🇪🇨", "unicode": "U+1F1EA U+1F1E8", "name": "Ecuador" }, "EE": { "ISO": "EE", "native": "🇪🇪", "unicode": "U+1F1EA U+1F1EA", "name": "Estonia" }, "EG": { "ISO": "EG", "native": "🇪🇬", "unicode": "U+1F1EA U+1F1EC", "name": "Egypt" }, "EH": { "ISO": "EH", "native": "🇪🇭", "unicode": "U+1F1EA U+1F1ED", "name": "Western Sahara" }, "ER": { "ISO": "ER", "native": "🇪🇷", "unicode": "U+1F1EA U+1F1F7", "name": "Eritrea" }, "ES": { "ISO": "ES", "native": "🇪🇸", "unicode": "U+1F1EA U+1F1F8", "name": "Spain" }, "ET": { "ISO": "ET", "native": "🇪🇹", "unicode": "U+1F1EA U+1F1F9", "name": "Ethiopia" }, "FI": { "ISO": "FI", "native": "🇫🇮", "unicode": "U+1F1EB U+1F1EE", "name": "Finland" }, "FJ": { "ISO": "FJ", "native": "🇫🇯", "unicode": "U+1F1EB U+1F1EF", "name": "Fiji" }, "FK": { "ISO": "FK", "native": "🇫🇰", "unicode": "U+1F1EB U+1F1F0", "name": "Falkland Islands (Malvinas)" }, "FM": { "ISO": "FM", "native": "🇫🇲", "unicode": "U+1F1EB U+1F1F2", "name": "Micronesia" }, "FO": { "ISO": "FO", "native": "🇫🇴", "unicode": "U+1F1EB U+1F1F4", "name": "Faroe Islands" }, "FR": { "ISO": "FR", "native": "🇫🇷", "unicode": "U+1F1EB U+1F1F7", "name": "France" }, "GA": { "ISO": "GA", "native": "🇬🇦", "unicode": "U+1F1EC U+1F1E6", "name": "Gabon" }, "GB": { "ISO": "GB", "native": "🇬🇧", "unicode": "U+1F1EC U+1F1E7", "name": "United Kingdom" }, "GD": { "ISO": "GD", "native": "🇬🇩", "unicode": "U+1F1EC U+1F1E9", "name": "Grenada" }, "GE": { "ISO": "GE", "native": "🇬🇪", "unicode": "U+1F1EC U+1F1EA", "name": "Georgia" }, "GF": { "ISO": "GF", "native": "🇬🇫", "unicode": "U+1F1EC U+1F1EB", "name": "French Guiana" }, "GG": { "ISO": "GG", "native": "🇬🇬", "unicode": "U+1F1EC U+1F1EC", "name": "Guernsey" }, "GH": { "ISO": "GH", "native": "🇬🇭", "unicode": "U+1F1EC U+1F1ED", "name": "Ghana" }, "GI": { "ISO": "GI", "native": "🇬🇮", "unicode": "U+1F1EC U+1F1EE", "name": "Gibraltar" }, "GL": { "ISO": "GL", "native": "🇬🇱", "unicode": "U+1F1EC U+1F1F1", "name": "Greenland" }, "GM": { "ISO": "GM", "native": "🇬🇲", "unicode": "U+1F1EC U+1F1F2", "name": "Gambia" }, "GN": { "ISO": "GN", "native": "🇬🇳", "unicode": "U+1F1EC U+1F1F3", "name": "Guinea" }, "GP": { "ISO": "GP", "native": "🇬🇵", "unicode": "U+1F1EC U+1F1F5", "name": "Guadeloupe" }, "GQ": { "ISO": "GQ", "native": "🇬🇶", "unicode": "U+1F1EC U+1F1F6", "name": "Equatorial Guinea" }, "GR": { "ISO": "GR", "native": "🇬🇷", "unicode": "U+1F1EC U+1F1F7", "name": "Greece" }, "GS": { "ISO": "GS", "native": "🇬🇸", "unicode": "U+1F1EC U+1F1F8", "name": "South Georgia" }, "GT": { "ISO": "GT", "native": "🇬🇹", "unicode": "U+1F1EC U+1F1F9", "name": "Guatemala" }, "GU": { "ISO": "GU", "native": "🇬🇺", "unicode": "U+1F1EC U+1F1FA", "name": "Guam" }, "GW": { "ISO": "GW", "native": "🇬🇼", "unicode": "U+1F1EC U+1F1FC", "name": "Guinea-Bissau" }, "GY": { "ISO": "GY", "native": "🇬🇾", "unicode": "U+1F1EC U+1F1FE", "name": "Guyana" }, "HK": { "ISO": "HK", "native": "🇭🇰", "unicode": "U+1F1ED U+1F1F0", "name": "Hong Kong" }, "HM": { "ISO": "HM", "native": "🇭🇲", "unicode": "U+1F1ED U+1F1F2", "name": "Heard Island and Mcdonald Islands" }, "HN": { "ISO": "HN", "native": "🇭🇳", "unicode": "U+1F1ED U+1F1F3", "name": "Honduras" }, "HR": { "ISO": "HR", "native": "🇭🇷", "unicode": "U+1F1ED U+1F1F7", "name": "Croatia" }, "HT": { "ISO": "HT", "native": "🇭🇹", "unicode": "U+1F1ED U+1F1F9", "name": "Haiti" }, "HU": { "ISO": "HU", "native": "🇭🇺", "unicode": "U+1F1ED U+1F1FA", "name": "Hungary" }, "ID": { "ISO": "ID", "native": "🇮🇩", "unicode": "U+1F1EE U+1F1E9", "name": "Indonesia" }, "IE": { "ISO": "IE", "native": "🇮🇪", "unicode": "U+1F1EE U+1F1EA", "name": "Ireland" }, "IL": { "ISO": "IL", "native": "🇮🇱", "unicode": "U+1F1EE U+1F1F1", "name": "Israel" }, "IM": { "ISO": "IM", "native": "🇮🇲", "unicode": "U+1F1EE U+1F1F2", "name": "Isle of Man" }, "IN": { "ISO": "IN", "native": "🇮🇳", "unicode": "U+1F1EE U+1F1F3", "name": "India" }, "IO": { "ISO": "IO", "native": "🇮🇴", "unicode": "U+1F1EE U+1F1F4", "name": "British Indian Ocean Territory" }, "IQ": { "ISO": "IQ", "native": "🇮🇶", "unicode": "U+1F1EE U+1F1F6", "name": "Iraq" }, "IR": { "ISO": "IR", "native": "🇮🇷", "unicode": "U+1F1EE U+1F1F7", "name": "Iran" }, "IS": { "ISO": "IS", "native": "🇮🇸", "unicode": "U+1F1EE U+1F1F8", "name": "Iceland" }, "IT": { "ISO": "IT", "native": "🇮🇹", "unicode": "U+1F1EE U+1F1F9", "name": "Italy" }, "JE": { "ISO": "JE", "native": "🇯🇪", "unicode": "U+1F1EF U+1F1EA", "name": "Jersey" }, "JM": { "ISO": "JM", "native": "🇯🇲", "unicode": "U+1F1EF U+1F1F2", "name": "Jamaica" }, "JO": { "ISO": "JO", "native": "🇯🇴", "unicode": "U+1F1EF U+1F1F4", "name": "Jordan" }, "JP": { "ISO": "JP", "native": "🇯🇵", "unicode": "U+1F1EF U+1F1F5", "name": "Japan" }, "KE": { "ISO": "KE", "native": "🇰🇪", "unicode": "U+1F1F0 U+1F1EA", "name": "Kenya" }, "KG": { "ISO": "KG", "native": "🇰🇬", "unicode": "U+1F1F0 U+1F1EC", "name": "Kyrgyzstan" }, "KH": { "ISO": "KH", "native": "🇰🇭", "unicode": "U+1F1F0 U+1F1ED", "name": "Cambodia" }, "KI": { "ISO": "KI", "native": "🇰🇮", "unicode": "U+1F1F0 U+1F1EE", "name": "Kiribati" }, "KM": { "ISO": "KM", "native": "🇰🇲", "unicode": "U+1F1F0 U+1F1F2", "name": "Comoros" }, "KN": { "ISO": "KN", "native": "🇰🇳", "unicode": "U+1F1F0 U+1F1F3", "name": "Saint Kitts and Nevis" }, "KP": { "ISO": "KP", "native": "🇰🇵", "unicode": "U+1F1F0 U+1F1F5", "name": "North Korea" }, "KR": { "ISO": "KR", "native": "🇰🇷", "unicode": "U+1F1F0 U+1F1F7", "name": "South Korea" }, "KW": { "ISO": "KW", "native": "🇰🇼", "unicode": "U+1F1F0 U+1F1FC", "name": "Kuwait" }, "KY": { "ISO": "KY", "native": "🇰🇾", "unicode": "U+1F1F0 U+1F1FE", "name": "Cayman Islands" }, "KZ": { "ISO": "KZ", "native": "🇰🇿", "unicode": "U+1F1F0 U+1F1FF", "name": "Kazakhstan" }, "LA": { "ISO": "LA", "native": "🇱🇦", "unicode": "U+1F1F1 U+1F1E6", "name": "Lao People's Democratic Republic" }, "LB": { "ISO": "LB", "native": "🇱🇧", "unicode": "U+1F1F1 U+1F1E7", "name": "Lebanon" }, "LC": { "ISO": "LC", "native": "🇱🇨", "unicode": "U+1F1F1 U+1F1E8", "name": "Saint Lucia" }, "LI": { "ISO": "LI", "native": "🇱🇮", "unicode": "U+1F1F1 U+1F1EE", "name": "Liechtenstein" }, "LK": { "ISO": "LK", "native": "🇱🇰", "unicode": "U+1F1F1 U+1F1F0", "name": "Sri Lanka" }, "LR": { "ISO": "LR", "native": "🇱🇷", "unicode": "U+1F1F1 U+1F1F7", "name": "Liberia" }, "LS": { "ISO": "LS", "native": "🇱🇸", "unicode": "U+1F1F1 U+1F1F8", "name": "Lesotho" }, "LT": { "ISO": "LT", "native": "🇱🇹", "unicode": "U+1F1F1 U+1F1F9", "name": "Lithuania" }, "LU": { "ISO": "LU", "native": "🇱🇺", "unicode": "U+1F1F1 U+1F1FA", "name": "Luxembourg" }, "LV": { "ISO": "LV", "native": "🇱🇻", "unicode": "U+1F1F1 U+1F1FB", "name": "Latvia" }, "LY": { "ISO": "LY", "native": "🇱🇾", "unicode": "U+1F1F1 U+1F1FE", "name": "Libya" }, "MA": { "ISO": "MA", "native": "🇲🇦", "unicode": "U+1F1F2 U+1F1E6", "name": "Morocco" }, "MC": { "ISO": "MC", "native": "🇲🇨", "unicode": "U+1F1F2 U+1F1E8", "name": "Monaco" }, "MD": { "ISO": "MD", "native": "🇲🇩", "unicode": "U+1F1F2 U+1F1E9", "name": "Moldova" }, "ME": { "ISO": "ME", "native": "🇲🇪", "unicode": "U+1F1F2 U+1F1EA", "name": "Montenegro" }, "MF": { "ISO": "MF", "native": "🇲🇫", "unicode": "U+1F1F2 U+1F1EB", "name": "Saint Martin (French Part)" }, "MG": { "ISO": "MG", "native": "🇲🇬", "unicode": "U+1F1F2 U+1F1EC", "name": "Madagascar" }, "MH": { "ISO": "MH", "native": "🇲🇭", "unicode": "U+1F1F2 U+1F1ED", "name": "Marshall Islands" }, "MK": { "ISO": "MK", "native": "🇲🇰", "unicode": "U+1F1F2 U+1F1F0", "name": "Macedonia" }, "ML": { "ISO": "ML", "native": "🇲🇱", "unicode": "U+1F1F2 U+1F1F1", "name": "Mali" }, "MM": { "ISO": "MM", "native": "🇲🇲", "unicode": "U+1F1F2 U+1F1F2", "name": "Myanmar" }, "MN": { "ISO": "MN", "native": "🇲🇳", "unicode": "U+1F1F2 U+1F1F3", "name": "Mongolia" }, "MO": { "ISO": "MO", "native": "🇲🇴", "unicode": "U+1F1F2 U+1F1F4", "name": "Macao" }, "MP": { "ISO": "MP", "native": "🇲🇵", "unicode": "U+1F1F2 U+1F1F5", "name": "Northern Mariana Islands" }, "MQ": { "ISO": "MQ", "native": "🇲🇶", "unicode": "U+1F1F2 U+1F1F6", "name": "Martinique" }, "MR": { "ISO": "MR", "native": "🇲🇷", "unicode": "U+1F1F2 U+1F1F7", "name": "Mauritania" }, "MS": { "ISO": "MS", "native": "🇲🇸", "unicode": "U+1F1F2 U+1F1F8", "name": "Montserrat" }, "MT": { "ISO": "MT", "native": "🇲🇹", "unicode": "U+1F1F2 U+1F1F9", "name": "Malta" }, "MU": { "ISO": "MU", "native": "🇲🇺", "unicode": "U+1F1F2 U+1F1FA", "name": "Mauritius" }, "MV": { "ISO": "MV", "native": "🇲🇻", "unicode": "U+1F1F2 U+1F1FB", "name": "Maldives" }, "MW": { "ISO": "MW", "native": "🇲🇼", "unicode": "U+1F1F2 U+1F1FC", "name": "Malawi" }, "MX": { "ISO": "MX", "native": "🇲🇽", "unicode": "U+1F1F2 U+1F1FD", "name": "Mexico" }, "MY": { "ISO": "MY", "native": "🇲🇾", "unicode": "U+1F1F2 U+1F1FE", "name": "Malaysia" }, "MZ": { "ISO": "MZ", "native": "🇲🇿", "unicode": "U+1F1F2 U+1F1FF", "name": "Mozambique" }, "NA": { "ISO": "NA", "native": "🇳🇦", "unicode": "U+1F1F3 U+1F1E6", "name": "Namibia" }, "NC": { "ISO": "NC", "native": "🇳🇨", "unicode": "U+1F1F3 U+1F1E8", "name": "New Caledonia" }, "NE": { "ISO": "NE", "native": "🇳🇪", "unicode": "U+1F1F3 U+1F1EA", "name": "Niger" }, "NF": { "ISO": "NF", "native": "🇳🇫", "unicode": "U+1F1F3 U+1F1EB", "name": "Norfolk Island" }, "NG": { "ISO": "NG", "native": "🇳🇬", "unicode": "U+1F1F3 U+1F1EC", "name": "Nigeria" }, "NI": { "ISO": "NI", "native": "🇳🇮", "unicode": "U+1F1F3 U+1F1EE", "name": "Nicaragua" }, "NL": { "ISO": "NL", "native": "🇳🇱", "unicode": "U+1F1F3 U+1F1F1", "name": "Netherlands" }, "NO": { "ISO": "NO", "native": "🇳🇴", "unicode": "U+1F1F3 U+1F1F4", "name": "Norway" }, "NP": { "ISO": "NP", "native": "🇳🇵", "unicode": "U+1F1F3 U+1F1F5", "name": "Nepal" }, "NR": { "ISO": "NR", "native": "🇳🇷", "unicode": "U+1F1F3 U+1F1F7", "name": "Nauru" }, "NU": { "ISO": "NU", "native": "🇳🇺", "unicode": "U+1F1F3 U+1F1FA", "name": "Niue" }, "NZ": { "ISO": "NZ", "native": "🇳🇿", "unicode": "U+1F1F3 U+1F1FF", "name": "New Zealand" }, "OM": { "ISO": "OM", "native": "🇴🇲", "unicode": "U+1F1F4 U+1F1F2", "name": "Oman" }, "PA": { "ISO": "PA", "native": "🇵🇦", "unicode": "U+1F1F5 U+1F1E6", "name": "Panama" }, "PE": { "ISO": "PE", "native": "🇵🇪", "unicode": "U+1F1F5 U+1F1EA", "name": "Peru" }, "PF": { "ISO": "PF", "native": "🇵🇫", "unicode": "U+1F1F5 U+1F1EB", "name": "French Polynesia" }, "PG": { "ISO": "PG", "native": "🇵🇬", "unicode": "U+1F1F5 U+1F1EC", "name": "Papua New Guinea" }, "PH": { "ISO": "PH", "native": "🇵🇭", "unicode": "U+1F1F5 U+1F1ED", "name": "Philippines" }, "PK": { "ISO": "PK", "native": "🇵🇰", "unicode": "U+1F1F5 U+1F1F0", "name": "Pakistan" }, "PL": { "ISO": "PL", "native": "🇵🇱", "unicode": "U+1F1F5 U+1F1F1", "name": "Poland" }, "PM": { "ISO": "PM", "native": "🇵🇲", "unicode": "U+1F1F5 U+1F1F2", "name": "Saint Pierre and Miquelon" }, "PN": { "ISO": "PN", "native": "🇵🇳", "unicode": "U+1F1F5 U+1F1F3", "name": "Pitcairn" }, "PR": { "ISO": "PR", "native": "🇵🇷", "unicode": "U+1F1F5 U+1F1F7", "name": "Puerto Rico" }, "PS": { "ISO": "PS", "native": "🇵🇸", "unicode": "U+1F1F5 U+1F1F8", "name": "Palestinian Territory" }, "PT": { "ISO": "PT", "native": "🇵🇹", "unicode": "U+1F1F5 U+1F1F9", "name": "Portugal" }, "PW": { "ISO": "PW", "native": "🇵🇼", "unicode": "U+1F1F5 U+1F1FC", "name": "Palau" }, "PY": { "ISO": "PY", "native": "🇵🇾", "unicode": "U+1F1F5 U+1F1FE", "name": "Paraguay" }, "QA": { "ISO": "QA", "native": "🇶🇦", "unicode": "U+1F1F6 U+1F1E6", "name": "Qatar" }, "RE": { "ISO": "RE", "native": "🇷🇪", "unicode": "U+1F1F7 U+1F1EA", "name": "Réunion" }, "RO": { "ISO": "RO", "native": "🇷🇴", "unicode": "U+1F1F7 U+1F1F4", "name": "Romania" }, "RS": { "ISO": "RS", "native": "🇷🇸", "unicode": "U+1F1F7 U+1F1F8", "name": "Serbia" }, "RU": { "ISO": "RU", "native": "🇷🇺", "unicode": "U+1F1F7 U+1F1FA", "name": "Russia" }, "RW": { "ISO": "RW", "native": "🇷🇼", "unicode": "U+1F1F7 U+1F1FC", "name": "Rwanda" }, "SA": { "ISO": "SA", "native": "🇸🇦", "unicode": "U+1F1F8 U+1F1E6", "name": "Saudi Arabia" }, "SB": { "ISO": "SB", "native": "🇸🇧", "unicode": "U+1F1F8 U+1F1E7", "name": "Solomon Islands" }, "SC": { "ISO": "SC", "native": "🇸🇨", "unicode": "U+1F1F8 U+1F1E8", "name": "Seychelles" }, "SD": { "ISO": "SD", "native": "🇸🇩", "unicode": "U+1F1F8 U+1F1E9", "name": "Sudan" }, "SE": { "ISO": "SE", "native": "🇸🇪", "unicode": "U+1F1F8 U+1F1EA", "name": "Sweden" }, "SG": { "ISO": "SG", "native": "🇸🇬", "unicode": "U+1F1F8 U+1F1EC", "name": "Singapore" }, "SH": { "ISO": "SH", "native": "🇸🇭", "unicode": "U+1F1F8 U+1F1ED", "name": "Saint Helena| Ascension and Tristan Da Cunha" }, "SI": { "ISO": "SI", "native": "🇸🇮", "unicode": "U+1F1F8 U+1F1EE", "name": "Slovenia" }, "SJ": { "ISO": "SJ", "native": "🇸🇯", "unicode": "U+1F1F8 U+1F1EF", "name": "Svalbard and Jan Mayen" }, "SK": { "ISO": "SK", "native": "🇸🇰", "unicode": "U+1F1F8 U+1F1F0", "name": "Slovakia" }, "SL": { "ISO": "SL", "native": "🇸🇱", "unicode": "U+1F1F8 U+1F1F1", "name": "Sierra Leone" }, "SM": { "ISO": "SM", "native": "🇸🇲", "unicode": "U+1F1F8 U+1F1F2", "name": "San Marino" }, "SN": { "ISO": "SN", "native": "🇸🇳", "unicode": "U+1F1F8 U+1F1F3", "name": "Senegal" }, "SO": { "ISO": "SO", "native": "🇸🇴", "unicode": "U+1F1F8 U+1F1F4", "name": "Somalia" }, "SR": { "ISO": "SR", "native": "🇸🇷", "unicode": "U+1F1F8 U+1F1F7", "name": "Suriname" }, "SS": { "ISO": "SS", "native": "🇸🇸", "unicode": "U+1F1F8 U+1F1F8", "name": "South Sudan" }, "ST": { "ISO": "ST", "native": "🇸🇹", "unicode": "U+1F1F8 U+1F1F9", "name": "Sao Tome and Principe" }, "SV": { "ISO": "SV", "native": "🇸🇻", "unicode": "U+1F1F8 U+1F1FB", "name": "El Salvador" }, "SX": { "ISO": "SX", "native": "🇸🇽", "unicode": "U+1F1F8 U+1F1FD", "name": "Sint Maarten (Dutch Part)" }, "SY": { "ISO": "SY", "native": "🇸🇾", "unicode": "U+1F1F8 U+1F1FE", "name": "Syrian Arab Republic" }, "SZ": { "ISO": "SZ", "native": "🇸🇿", "unicode": "U+1F1F8 U+1F1FF", "name": "Swaziland" }, "TC": { "ISO": "TC", "native": "🇹🇨", "unicode": "U+1F1F9 U+1F1E8", "name": "Turks and Caicos Islands" }, "TD": { "ISO": "TD", "native": "🇹🇩", "unicode": "U+1F1F9 U+1F1E9", "name": "Chad" }, "TF": { "ISO": "TF", "native": "🇹🇫", "unicode": "U+1F1F9 U+1F1EB", "name": "French Southern Territories" }, "TG": { "ISO": "TG", "native": "🇹🇬", "unicode": "U+1F1F9 U+1F1EC", "name": "Togo" }, "TH": { "ISO": "TH", "native": "🇹🇭", "unicode": "U+1F1F9 U+1F1ED", "name": "Thailand" }, "TJ": { "ISO": "TJ", "native": "🇹🇯", "unicode": "U+1F1F9 U+1F1EF", "name": "Tajikistan" }, "TK": { "ISO": "TK", "native": "🇹🇰", "unicode": "U+1F1F9 U+1F1F0", "name": "Tokelau" }, "TL": { "ISO": "TL", "native": "🇹🇱", "unicode": "U+1F1F9 U+1F1F1", "name": "Timor-Leste" }, "TM": { "ISO": "TM", "native": "🇹🇲", "unicode": "U+1F1F9 U+1F1F2", "name": "Turkmenistan" }, "TN": { "ISO": "TN", "native": "🇹🇳", "unicode": "U+1F1F9 U+1F1F3", "name": "Tunisia" }, "TO": { "ISO": "TO", "native": "🇹🇴", "unicode": "U+1F1F9 U+1F1F4", "name": "Tonga" }, "TR": { "ISO": "TR", "native": "🇹🇷", "unicode": "U+1F1F9 U+1F1F7", "name": "Turkey" }, "TT": { "ISO": "TT", "native": "🇹🇹", "unicode": "U+1F1F9 U+1F1F9", "name": "Trinidad and Tobago" }, "TV": { "ISO": "TV", "native": "🇹🇻", "unicode": "U+1F1F9 U+1F1FB", "name": "Tuvalu" }, "TW": { "ISO": "TW", "native": "🇹🇼", "unicode": "U+1F1F9 U+1F1FC", "name": "Taiwan" }, "TZ": { "ISO": "TZ", "native": "🇹🇿", "unicode": "U+1F1F9 U+1F1FF", "name": "Tanzania" }, "UA": { "ISO": "UA", "native": "🇺🇦", "unicode": "U+1F1FA U+1F1E6", "name": "Ukraine" }, "UG": { "ISO": "UG", "native": "🇺🇬", "unicode": "U+1F1FA U+1F1EC", "name": "Uganda" }, "UM": { "ISO": "UM", "native": "🇺🇲", "unicode": "U+1F1FA U+1F1F2", "name": "United States Minor Outlying Islands" }, "US": { "ISO": "US", "native": "🇺🇸", "unicode": "U+1F1FA U+1F1F8", "name": "United States" }, "UY": { "ISO": "UY", "native": "🇺🇾", "unicode": "U+1F1FA U+1F1FE", "name": "Uruguay" }, "UZ": { "ISO": "UZ", "native": "🇺🇿", "unicode": "U+1F1FA U+1F1FF", "name": "Uzbekistan" }, "VA": { "ISO": "VA", "native": "🇻🇦", "unicode": "U+1F1FB U+1F1E6", "name": "Vatican City" }, "VC": { "ISO": "VC", "native": "🇻🇨", "unicode": "U+1F1FB U+1F1E8", "name": "Saint Vincent and The Grenadines" }, "VE": { "ISO": "VE", "native": "🇻🇪", "unicode": "U+1F1FB U+1F1EA", "name": "Venezuela" }, "VG": { "ISO": "VG", "native": "🇻🇬", "unicode": "U+1F1FB U+1F1EC", "name": "Virgin Islands| British" }, "VI": { "ISO": "VI", "native": "🇻🇮", "unicode": "U+1F1FB U+1F1EE", "name": "Virgin Islands| U.S." }, "VN": { "ISO": "VN", "native": "🇻🇳", "unicode": "U+1F1FB U+1F1F3", "name": "Viet Nam" }, "VU": { "ISO": "VU", "native": "🇻🇺", "unicode": "U+1F1FB U+1F1FA", "name": "Vanuatu" }, "WF": { "ISO": "WF", "native": "🇼🇫", "unicode": "U+1F1FC U+1F1EB", "name": "Wallis and Futuna" }, "WS": { "ISO": "WS", "native": "🇼🇸", "unicode": "U+1F1FC U+1F1F8", "name": "Samoa" }, "YE": { "ISO": "YE", "native": "🇾🇪", "unicode": "U+1F1FE U+1F1EA", "name": "Yemen" }, "YT": { "ISO": "YT", "native": "🇾🇹", "unicode": "U+1F1FE U+1F1F9", "name": "Mayotte" }, "ZA": { "ISO": "ZA", "native": "🇿🇦", "unicode": "U+1F1FF U+1F1E6", "name": "South Africa" }, "ZM": { "ISO": "ZM", "native": "🇿🇲", "unicode": "U+1F1FF U+1F1F2", "name": "Zambia" }, "ZW": { "ISO": "ZW", "native": "🇿🇼", "unicode": "U+1F1FF U+1F1FC", "name": "Zimbabwe" } };
    var countries = { "Name": "ISO", "Andorra": "AD", "United Arab Emirates": "AE", "Afghanistan": "AF", "Antigua and Barbuda": "AG", "Anguilla": "AI", "Albania": "AL", "Armenia": "AM", "Angola": "AO", "Antarctica": "AQ", "Argentina": "AR", "American Samoa": "AS", "Austria": "AT", "Australia": "AU", "Aruba": "AW", "Åland Islands": "AX", "Azerbaijan": "AZ", "Bosnia and Herzegovina": "BA", "Barbados": "BB", "Bangladesh": "BD", "Belgium": "BE", "Burkina Faso": "BF", "Bulgaria": "BG", "Bahrain": "BH", "Burundi": "BI", "Benin": "BJ", "Saint Barthélemy": "BL", "Bermuda": "BM", "Brunei Darussalam": "BN", "Bolivia": "BO", "Bonaire| Sint Eustatius and Saba": "BQ", "Brazil": "BR", "Bahamas": "BS", "Bhutan": "BT", "Bouvet Island": "BV", "Botswana": "BW", "Belarus": "BY", "Belize": "BZ", "Canada": "CA", "Cocos (Keeling) Islands": "CC", "Congo": "CG", "Central African Republic": "CF", "Switzerland": "CH", "Côte D'Ivoire": "CI", "Cook Islands": "CK", "Chile": "CL", "Cameroon": "CM", "China": "CN", "Colombia": "CO", "Costa Rica": "CR", "Cuba": "CU", "Cape Verde": "CV", "Curaçao": "CW", "Christmas Island": "CX", "Cyprus": "CY", "Czech Republic": "CZ", "Germany": "DE", "Djibouti": "DJ", "Denmark": "DK", "Dominica": "DM", "Dominican Republic": "DO", "Algeria": "DZ", "Ecuador": "EC", "Estonia": "EE", "Egypt": "EG", "Western Sahara": "EH", "Eritrea": "ER", "Spain": "ES", "Ethiopia": "ET", "Finland": "FI", "Fiji": "FJ", "Falkland Islands (Malvinas)": "FK", "Micronesia": "FM", "Faroe Islands": "FO", "France": "FR", "Gabon": "GA", "United Kingdom": "GB", "Grenada": "GD", "Georgia": "GE", "French Guiana": "GF", "Guernsey": "GG", "Ghana": "GH", "Gibraltar": "GI", "Greenland": "GL", "Gambia": "GM", "Guinea": "GN", "Guadeloupe": "GP", "Equatorial Guinea": "GQ", "Greece": "GR", "South Georgia": "GS", "Guatemala": "GT", "Guam": "GU", "Guinea-Bissau": "GW", "Guyana": "GY", "Hong Kong": "HK", "Heard Island and Mcdonald Islands": "HM", "Honduras": "HN", "Croatia": "HR", "Haiti": "HT", "Hungary": "HU", "Indonesia": "ID", "Ireland": "IE", "Israel": "IL", "Isle of Man": "IM", "India": "IN", "British Indian Ocean Territory": "IO", "Iraq": "IQ", "Iran": "IR", "Iceland": "IS", "Italy": "IT", "Jersey": "JE", "Jamaica": "JM", "Jordan": "JO", "Japan": "JP", "Kenya": "KE", "Kyrgyzstan": "KG", "Cambodia": "KH", "Kiribati": "KI", "Comoros": "KM", "Saint Kitts and Nevis": "KN", "North Korea": "KP", "South Korea": "KR", "Kuwait": "KW", "Cayman Islands": "KY", "Kazakhstan": "KZ", "Lao People's Democratic Republic": "LA", "Lebanon": "LB", "Saint Lucia": "LC", "Liechtenstein": "LI", "Sri Lanka": "LK", "Liberia": "LR", "Lesotho": "LS", "Lithuania": "LT", "Luxembourg": "LU", "Latvia": "LV", "Libya": "LY", "Morocco": "MA", "Monaco": "MC", "Moldova": "MD", "Montenegro": "ME", "Saint Martin (French Part)": "MF", "Madagascar": "MG", "Marshall Islands": "MH", "Macedonia": "MK", "Mali": "ML", "Myanmar": "MM", "Mongolia": "MN", "Macao": "MO", "Northern Mariana Islands": "MP", "Martinique": "MQ", "Mauritania": "MR", "Montserrat": "MS", "Malta": "MT", "Mauritius": "MU", "Maldives": "MV", "Malawi": "MW", "Mexico": "MX", "Malaysia": "MY", "Mozambique": "MZ", "Namibia": "NA", "New Caledonia": "NC", "Niger": "NE", "Norfolk Island": "NF", "Nigeria": "NG", "Nicaragua": "NI", "Netherlands": "NL", "Norway": "NO", "Nepal": "NP", "Nauru": "NR", "Niue": "NU", "New Zealand": "NZ", "Oman": "OM", "Panama": "PA", "Peru": "PE", "French Polynesia": "PF", "Papua New Guinea": "PG", "Philippines": "PH", "Pakistan": "PK", "Poland": "PL", "Saint Pierre and Miquelon": "PM", "Pitcairn": "PN", "Puerto Rico": "PR", "Palestinian Territory": "PS", "Portugal": "PT", "Palau": "PW", "Paraguay": "PY", "Qatar": "QA", "Réunion": "RE", "Romania": "RO", "Serbia": "RS", "Russia": "RU", "Rwanda": "RW", "Saudi Arabia": "SA", "Solomon Islands": "SB", "Seychelles": "SC", "Sudan": "SD", "Sweden": "SE", "Singapore": "SG", "Saint Helena| Ascension and Tristan Da Cunha": "SH", "Slovenia": "SI", "Svalbard and Jan Mayen": "SJ", "Slovakia": "SK", "Sierra Leone": "SL", "San Marino": "SM", "Senegal": "SN", "Somalia": "SO", "Suriname": "SR", "South Sudan": "SS", "Sao Tome and Principe": "ST", "El Salvador": "SV", "Sint Maarten (Dutch Part)": "SX", "Syrian Arab Republic": "SY", "Swaziland": "SZ", "Turks and Caicos Islands": "TC", "Chad": "TD", "French Southern Territories": "TF", "Togo": "TG", "Thailand": "TH", "Tajikistan": "TJ", "Tokelau": "TK", "Timor-Leste": "TL", "Turkmenistan": "TM", "Tunisia": "TN", "Tonga": "TO", "Turkey": "TR", "Trinidad and Tobago": "TT", "Tuvalu": "TV", "Taiwan": "TW", "Tanzania": "TZ", "Ukraine": "UA", "Uganda": "UG", "United States Minor Outlying Islands": "UM", "United States": "US", "Uruguay": "UY", "Uzbekistan": "UZ", "Vatican City": "VA", "Saint Vincent and The Grenadines": "VC", "Venezuela": "VE", "Virgin Islands| British": "VG", "Virgin Islands| U.S.": "VI", "Viet Nam": "VN", "Vanuatu": "VU", "Wallis and Futuna": "WF", "Samoa": "WS", "Yemen": "YE", "Mayotte": "YT", "South Africa": "ZA", "Zambia": "ZM", "Zimbabwe": "ZW" };
    function find(country) {
        if (country.length != 2) {
            country = countries[country];
        }
        return flags[country];
    }
    Flags.find = find;
})(Flags || (Flags = {}));
