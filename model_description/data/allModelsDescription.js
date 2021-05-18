module.exports = {
	"bortovoe_napryazhenie": {
		"modelName": "bortovoe_napryazhenie",
		"ruModelName": "Бортовое напряжение",
		"URLs": {
			"get": "bortovoe_napryazhenie"
		},
		"fields": {
			"Bortovoe_napryazhenie": {
				"label": "Бортовое напряжение",
				"value": "",
				"units": "в",
				"type": "INTEGER",
				"units_gloabal_id": "273472452"
			}
		}
	},
	"cilindry": {
		"modelName": "cilindry",
		"ruModelName": "Цилиндры",
		"URLs": {
			"get": "cilindry"
		},
		"fields": {
			"Raspolozhenie_i_chislo_cilindrov": {
				"label": "Расположение и число цилиндров",
				"value": "",
				"type": "STRING"
			}
		}
	},
	"dvigatel": {
		"modelName": "dvigatel",
		"ruModelName": "Двигатель",
		"URLs": {
			"get": "dvigatel"
		},
		"fields": {
			"Dvigatel": {
				"label": "Двигатель",
				"value": "",
				"type": "STRING"
			},
			"Rabochij_obyom_dvigatelya": {
				"label": "Рабочий объем двигателя",
				"value": "",
				"units": "л",
				"type": "INTEGER",
				"units_gloabal_id": "273472400"
			},
			"Moshchnost": {
				"label": "Мощность",
				"value": "",
				"units": "кВт",
				"type": "INTEGER",
				"units_gloabal_id": "273472448"
			},
			"Krutyashch_moment": {
				"label": "Крутящий момент",
				"value": "",
				"units": "Н/м",
				"type": "INTEGER",
				"units_gloabal_id": "273472508"
			},
			"cilindry_id": {
				"label": "Цилиндры",
				"value": "",
				"model": "cilindry",
				"inputComponent": "SelectFromList",
				"outputComponent": "ShowCharacteristic",
				"type": "INTEGER"
			}
		}
	},
	"gabarity": {
		"modelName": "gabarity",
		"ruModelName": "Габариты",
		"URLs": {
			"get": "gabarity"
		},
		"fields": {
			"Dlina": {
				"label": "Длина",
				"value": "",
				"units": "м",
				"type": "INTEGER",
				"units_gloabal_id": "273472348"
			},
			"Shirina": {
				"label": "Ширина",
				"value": "",
				"units": "м",
				"type": "INTEGER",
				"units_gloabal_id": "273472348"
			},
			"Visota": {
				"label": "Высота",
				"value": "",
				"units": "м",
				"type": "INTEGER",
				"units_gloabal_id": "273472348"
			}
		}
	},
	"gruppa_ATS": {
		"modelName": "gruppa_ATS",
		"ruModelName": "Группа АТС",
		"URLs": {
			"get": "gruppa_ATS"
		},
		"fields": {
			"Naimenovanie": {
				"label": "Наименование",
				"value": "",
				"type": "STRING"
			},
			"Abbreviatura": {
				"label": "Аббревиатура",
				"value": "",
				"type": "STRING"
			}
		}
	},
	"harakteristiki_dvigatelya": {
		"modelName": "harakteristiki_dvigatelya",
		"ruModelName": "Характеристики двигателя",
		"URLs": {
			"get": "harakteristiki_dvigatelya"
		},
		"fields": {
			"Raskhod_topliva": {
				"label": "Расход топлива",
				"value": "",
				"units": "л",
				"type": "INTEGER",
				"units_gloabal_id": "273472400"
			},
			"dvigatel_id": {
				"label": "Двигатель",
				"value": "",
				"model": "dvigatel",
				"inputComponent": "SelectFromList",
				"outputComponent": "ShowCharacteristic",
				"type": "INTEGER"
			}
		}
	},
	"harakteristiki_pricepov": {
		"modelName": "harakteristiki_pricepov",
		"ruModelName": "Характеристики прицепов",
		"URLs": {
			"get": "harakteristiki_pricepov"
		},
		"fields": {
			"Porguz_visota": {
				"label": "Погрузочная высота",
				"value": "",
				"units": "мм",
				"type": "INTEGER",
				"units_gloabal_id": "273472340"
			},
			"Koleya": {
				"label": "Колея",
				"value": "",
				"units": "мм",
				"type": "INTEGER",
				"units_gloabal_id": "273472340"
			},
			"Baza": {
				"label": "База",
				"value": "",
				"units": "мм",
				"type": "INTEGER",
				"units_gloabal_id": "273472340"
			},
			"Maks_skorost": {
				"label": "Максимальная скорость",
				"value": "",
				"units": "км/ч",
				"type": "INTEGER",
				"units_gloabal_id": "273472569"
			}
		}
	},
	"hodovye_kachestva": {
		"modelName": "hodovye_kachestva",
		"ruModelName": "Ходовые качества",
		"URLs": {
			"get": "hodovye_kachestva"
		},
		"fields": {
			"Radius_povorota": {
				"label": "Радиус поворота",
				"value": "",
				"units": "м",
				"type": "INTEGER",
				"units_gloabal_id": "273472348"
			},
			"Maksimalno_preodolevaemyj_podyom": {
				"label": "Максимальный преодолеваемый подъем",
				"value": "",
				"units": "%",
				"type": "INTEGER",
				"units_gloabal_id": "273473063"
			},
			"Maks_skorost": {
				"label": "Максимальная скорость",
				"value": "",
				"units": "км/ч",
				"type": "INTEGER",
				"units_gloabal_id": "273472569"
			}
		}
	},
	"kabina": {
		"modelName": "kabina",
		"ruModelName": "Кабина",
		"URLs": {
			"get": "kabina"
		},
		"fields": {
			"Kabina": {
				"label": "Кабина",
				"value": "",
				"type": "STRING"
			}
		}
	},
	"kolesnaya_formula": {
		"modelName": "kolesnaya_formula",
		"ruModelName": "Колесная формула",
		"URLs": {
			"get": "kolesnaya_formula"
		},
		"fields": {
			"Kolesnaya_formula": {
				"label": "Колесная формула",
				"value": "",
				"type": "STRING"
			}
		}
	},
	"koliosa": {
		"modelName": "koliosa",
		"ruModelName": "Колеса",
		"URLs": {
			"get": "koliosa"
		},
		"fields": {
			"Koliosnaya_baza": {
				"label": "Колесная база",
				"value": "",
				"units": "м",
				"type": "INTEGER",
				"units_gloabal_id": "273472340"
			},
			"tip_shin_id": {
				"label": "Тип шин",
				"value": "",
				"model": "tip_shin",
				"inputComponent": "SelectFromList",
				"outputComponent": "ShowCharacteristic",
				"type": "INTEGER"
			}
		}
	},
	"korobka_peredach": {
		"modelName": "korobka_peredach",
		"ruModelName": "Коробка передач",
		"URLs": {
			"get": "korobka_peredach"
		},
		"fields": {
			"Tip": {
				"label": "Тип",
				"value": "",
				"type": "STRING"
			}
		}
	},
	"massa": {
		"modelName": "massa",
		"ruModelName": "Масса",
		"URLs": {
			"get": "massa"
		},
		"fields": {
			"Snaryazhyonnaya_massa_perednyaya_os": {
				"label": "Снаряженная масса передняя ось",
				"value": "",
				"units": "кг",
				"units_gloabal_id": "273472428",
				"type": "INTEGER"
			},
			"Snaryazhyonnaya_massa_zadnyaya_os": {
				"label": "Снаряженная масса задняя ось",
				"value": "",
				"units": "кг",
				"units_gloabal_id": "273472428",
				"type": "INTEGER"
			},
			"Polnaya_massa_perednyaya_os": {
				"label": "Полная масса передняя ось",
				"value": "",
				"units": "кг",
				"units_gloabal_id": "273472428",
				"type": "INTEGER"
			},
			"Polnaya_massa_zadnyaya_os": {
				"label": "Полная масса передняя ось",
				"value": "",
				"units": "кг",
				"units_gloabal_id": "273472428",
				"type": "INTEGER"
			}
		}
	},
	"measure_unit": {
		"modelName": "measure_unit",
		"ruModelName": "Едининицы измерения",
		"URLs": {
			"get": "measure_unit"
		},
		"fields": {
			"global_id": {
				"label": "global_id",
				"value": "",
				"type": "INTEGER"
			},
			"NAME": {
				"label": "NAME",
				"value": "",
				"type": "STRING"
			},
			"IDX": {
				"label": "IDX",
				"value": "",
				"type": "STRING"
			},
			"SECTION": {
				"label": "SECTION",
				"value": "",
				"type": "INTEGER"
			},
			"SUBSECTION": {
				"label": "SUBSECTION",
				"value": "",
				"type": "INTEGER"
			},
			"ROWID": {
				"label": "ROWID",
				"value": "",
				"type": "INTEGER"
			},
			"NATIONAL": {
				"label": "NATIONAL",
				"value": "",
				"type": "STRING"
			},
			"INTERNATIONAL": {
				"label": "INTERNATIONAL",
				"value": "",
				"type": "STRING"
			},
			"ALFANATIONAL": {
				"label": "ALFANATIONAL",
				"value": "",
				"type": "STRING"
			},
			"ALFAINTERNATIONAL": {
				"label": "ALFAINTERNATIONAL",
				"value": "",
				"type": "STRING"
			},
			"CODE": {
				"label": "CODE",
				"value": "",
				"type": "INTEGER"
			}
		}
	},
	"tech_harakteristiki_avto": {
		"modelName": "tech_harakteristiki_avto",
		"ruModelName": "Технические характеристики",
		"URLs": {
			"get": "tech_harakteristiki_avto"
		},
		"fields": {
			"Obyom_toplivnyh_bakov": {
				"label": "Объем топливных баков",
				"value": "",
				"units": "л",
				"type": "INTEGER",
				"units_gloabal_id": "273472400"
			}
		}
	},
	"tip_ATS": {
		"modelName": "tip_ATS",
		"ruModelName": "Тип АТС",
		"URLs": {
			"get": "tip_ATS"
		},
		"fields": {
			"Naimenovanie": {
				"label": "Наименование",
				"value": "",
				"type": "STRING"
			},
			"Abbreviatura": {
				"label": "Аббревиатура",
				"value": "",
				"type": "STRING"
			}
		}
	},
	"tip_shin": {
		"modelName": "tip_shin",
		"ruModelName": "Тип шин",
		"URLs": {
			"get": "tip_shin"
		},
		"fields": {
			"Shini": {
				"label": "Шины",
				"value": "",
				"type": "STRING"
			}
		}
	},
	"ves_pricepov": {
		"modelName": "ves_pricepov",
		"ruModelName": "Вес прицепов",
		"URLs": {
			"get": "ves_pricepov"
		},
		"fields": {
			"Snaryazh_massa_na_1_os": {
				"label": "Снаряженная масса на 1ую ось",
				"value": "",
				"units": "кг",
				"type": "INTEGER",
				"units_gloabal_id": "273472428"
			},
			"Snaryazh_massa_na_2_os": {
				"label": "Снаряженная масса на 2ую ось",
				"value": "",
				"units": "кг",
				"type": "INTEGER",
				"units_gloabal_id": "273472428"
			},
			"Polnaya_massa_na_1_os": {
				"label": "Полная масса на 1ую ось",
				"value": "",
				"units": "кг",
				"type": "INTEGER",
				"units_gloabal_id": "273472428"
			},
			"Polnaya_massa_na_2_os": {
				"label": "Полная масса на 2ую ось",
				"value": "",
				"units": "кг",
				"type": "INTEGER",
				"units_gloabal_id": "273472428"
			}
		}
	}
}